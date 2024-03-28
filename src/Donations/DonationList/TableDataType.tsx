import { CloseIcon, EditIcon } from '@chakra-ui/icons';
import { IconButton, Select, Td } from '@chakra-ui/react'

type Props = {
  type: string;
  newType: string;
  setNewType: React.Dispatch<React.SetStateAction<string>>;
  handleTypeEdit: (newType: string, id: number) => void;
  typeEditClicked: boolean;
  setTypeEditClicked: React.Dispatch<React.SetStateAction<boolean>>;
  id: number;
}

const TableDataType = ( {type, newType, setNewType, handleTypeEdit, typeEditClicked, setTypeEditClicked, id}: Props ) => {

  // const updateValue = (e: any) => {
  //   setNewType(e.target.value);
  // }

  const cancelUpdateType = (e: any) => {
    setTypeEditClicked(!typeEditClicked);
  }

  const handleSubmit = (e: any) => {
    handleTypeEdit(e.target.value, id);
    setTypeEditClicked(!typeEditClicked);
  }

  return (
    <>
      {typeEditClicked ? (
        <Td display="flex">
        <Select size='sm' placeholder='None' onChange={handleSubmit}>
          <option value='Food'>Food</option>
          <option value='Clothing'>Clothing</option>
          <option value='Money'>Money</option>
        </Select>
        <IconButton
        ml={2}
        mt={1}
        onClick={cancelUpdateType}
        aria-label={"cancel icon"}
        icon={<CloseIcon />}
        background="none"
        size="xs"
        _hover={{ color: "red" }}
        ></IconButton>
      </Td>
      ) : (
        <Td>{type}
          <IconButton
            mb={1}
            aria-label={"edit icon"}
            icon={<EditIcon />}
            background="none"
            size="sm"
            _hover={{ color: "gray.50" }}
            onClick={() => setTypeEditClicked(!typeEditClicked)}
            >
          </IconButton>
          </Td>
      )}
    </>
  )
}

export default TableDataType;