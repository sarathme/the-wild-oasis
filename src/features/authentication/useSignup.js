import { useMutation } from "@tanstack/react-query";
import { signUp as signUpApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signUp, isPending } = useMutation({
    mutationFn: signUpApi,
    onSuccess: (user) => {
      toast.success(
        "Account created successfully. Please verify from the user's email"
      );
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { signUp, isPending };
}
