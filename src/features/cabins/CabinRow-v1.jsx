import styled from "styled-components";

import { formatCurrency } from "../../utils/helpers";
import { useDeleteCabin } from "./useDeleteCabin";

import CreateCabinForm from "./CreateCabinForm";
import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";
import { useCreateCabin } from "./useCreateCabin";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

function CabinRow({ cabin }) {
  const { isDeleting, deleteCabin } = useDeleteCabin();
  const { isCreating, createCabin } = useCreateCabin();
  const {
    name,
    image,
    maxCapacity,
    regularPrice,
    discount,
    id: cabinId,
    description,
  } = cabin;

  function handleDuplicateCabin() {
    createCabin({
      image,
      maxCapacity,
      regularPrice,
      discount,
      description,
      name: `Copy of ${name}`,
    });
  }
  return (
    <Table.Row>
      <Img src={image} />
      <Cabin>{name}</Cabin>
      <div>Fits upto {maxCapacity} guests</div>
      <Price>{formatCurrency(regularPrice)}</Price>
      {discount ? (
        <Discount>{formatCurrency(discount)}</Discount>
      ) : (
        <span>&mdash;</span>
      )}
      <div>
        <button onClick={handleDuplicateCabin} disabled={isCreating}>
          <HiSquare2Stack />
        </button>
        <Modal>
          <Modal.Open opens="edit">
            <button>
              <HiPencil />
            </button>
          </Modal.Open>
          <Modal.Window name="edit">
            <CreateCabinForm cabinToEdit={cabin} />
          </Modal.Window>

          <Modal.Open opens="confirm-delete">
            <button>
              <HiTrash />
            </button>
          </Modal.Open>
          <Modal.Window name="confirm-delete">
            <ConfirmDelete
              resourceName={name}
              onConfirm={() => deleteCabin(cabinId)}
              disabled={isDeleting}
            />
          </Modal.Window>
        </Modal>
        <Menus.Menu>
          <Menus.Toggle id={cabinId} />
          <Menus.List id={cabinId}>
            <Menus.Button
              icon={<HiSquare2Stack />}
              onClick={handleDuplicateCabin}>
              Duplicate
            </Menus.Button>
            <Menus.Button icon={<HiPencil />}>Edit</Menus.Button>
            <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
          </Menus.List>
        </Menus.Menu>
      </div>
    </Table.Row>
  );
}

export default CabinRow;
