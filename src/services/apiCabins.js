import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins couldnot br loaded");
  }

  return data;
}

// export async function createCabin(newCabin) {
//   //https://cvtmgfsnvhvbawewtwjt.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg

//   //https://cvtmgfsnvhvbawewtwjt.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg
//   console.log(newCabin);
//   const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
//     "/",
//     ""
//   );

//   const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;
//   console.log(imagePath);

//   // 1.) Create cabin
//   const { data, error } = await supabase
//     .from("cabins")
//     .insert([{ ...newCabin, image: imagePath }])
//     .select();

//   if (error) {
//     console.error(error);
//     throw new Error("Cabins couldnot be created");
//   }

//   //2.) Upload image
//   const { error: storageError } = await supabase.storage
//     .from("cabin-images")
//     .upload(`${imageName}`, newCabin.image);

//   if (storageError) {
//     console.log(data[0].id);
//     await supabase.from("cabins").delete().eq("id", data[0].id);
//     console.log(storageError);
//     throw new Error("Image could not be uploaded and Cabin is not created");
//   }

//   return data;
// }

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("Cabins couldnot be deleted");
  }
  return data;
}

export async function createEditCabin(newCabin, id) {
  const hasImgPath = newCabin.image?.startsWith?.(supabaseUrl);

  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );

  const imagePath = hasImgPath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  let query = supabase.from("cabins");
  // 1.) Create cabin
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);
  if (id) query = query.update({ ...newCabin, image: imagePath }).eq("id", id);

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("Cabins couldnot be created");
  }

  //2.) Upload image

  if (hasImgPath) return data;
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(`${imageName}`, newCabin.image);

  if (storageError) {
    console.log(data[0].id);
    await supabase.from("cabins").delete().eq("id", data[0].id);
    console.log(storageError);
    throw new Error("Image could not be uploaded and Cabin is not created");
  }

  return data;
}
