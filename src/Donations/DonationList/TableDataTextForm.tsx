import { CheckIcon, CloseIcon, EditIcon } from "@chakra-ui/icons";
import { FormControl, IconButton, Input, Td } from "@chakra-ui/react";

type Props = {
  newName: string;
  setNewName: React.Dispatch<React.SetStateAction<string>>;
  setNameEditOpen: React.Dispatch<React.SetStateAction<boolean>>;
  nameEditOpen: boolean;
  handleNameEdit: (newName: string, id: number) => void;
  id: number;
  donorName: string;
  isSomeEditOpen: boolean;
  setIsSomeEditOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const TableDataTextForm = ( {newName, setNewName, setNameEditOpen, nameEditOpen, handleNameEdit, id, donorName, isSomeEditOpen, setIsSomeEditOpen}: Props ) => {

  const updateValue = (e: any) => {
    setNewName(e.target.value);
  }

  const cancelUpdateName = (e: any) => {
    setNewName("");
    setIsSomeEditOpen(!isSomeEditOpen);
    setNameEditOpen(!nameEditOpen)
  }

  const handleSubmit = (e: any) => {
    handleNameEdit(newName, id);
    setIsSomeEditOpen(!isSomeEditOpen);
    setNameEditOpen(!nameEditOpen);
  }

  const handleClick = () => {
    setIsSomeEditOpen(!isSomeEditOpen);
    setNameEditOpen(!nameEditOpen)
  }

  return (
    <>
    {nameEditOpen ? (
      <Td display="flex">
      <FormControl isRequired>
        <Input
        type={'text'}
        fontSize="medium"
        width={"75%"} size="sm"
        onChange={updateValue}/>
      </FormControl>
      <IconButton
      onClick={handleSubmit}
      aria-label={"submit icon"}
      icon={<CheckIcon />}
      _hover={newName.length ? { color: "green" } : { color: "red" }} background="none"
      size="xs"
      ></IconButton>
      <IconButton
      onClick={cancelUpdateName}
      aria-label={"cancel icon"}
      icon={<CloseIcon />}
      background="none"
      size="xs"
      _hover={{ color: "red" }}
      ></IconButton>
    </Td>
    ) : (
      <Td>{donorName}
        {!isSomeEditOpen && (
          <IconButton
            mb={1}
            aria-label={"edit icon"}
            icon={<EditIcon />}
            background="none"
            size="sm"
            _hover={{ color: "gray.50" }}
            onClick={handleClick}
            >
          </IconButton>
        )}
        </Td>
    )}
    </>
  )
}

export default TableDataTextForm;