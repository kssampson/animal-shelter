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
  isSomeEditOpen: boolean;
  setIsSomeEditOpen: React.Dispatch<React.SetStateAction<boolean>>;
  filterOptions: string[];
}

const TableDataType = ( {type, newType, setNewType, handleTypeEdit, typeEditClicked, setTypeEditClicked, id, isSomeEditOpen, setIsSomeEditOpen, filterOptions}: Props ) => {

  const cancelUpdateType = (e: any) => {
    setIsSomeEditOpen(!isSomeEditOpen);
    setTypeEditClicked(!typeEditClicked);
  }

  const handleSubmit = (e: any) => {
    handleTypeEdit(e.target.value, id);
    setTypeEditClicked(!typeEditClicked);
  }

  const handleClick = () => {
    setIsSomeEditOpen(!isSomeEditOpen);
    setTypeEditClicked(!typeEditClicked);
  }

  return (
    <>
      {typeEditClicked ? (
        <Td display="flex">
        <Select size='sm' placeholder='None' onChange={handleSubmit}>
          {filterOptions.slice(1).map((option, idx) => {
            return (
              <option key={idx} value={`${option}`}>{`${option}`}</option>
            )
          })}
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

export default TableDataType;