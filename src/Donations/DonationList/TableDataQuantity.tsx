import { CheckIcon, CloseIcon, EditIcon } from "@chakra-ui/icons";
import { IconButton, NumberInput, NumberInputField, Td } from "@chakra-ui/react";

type Props = {
  type: string;
  quantity: number;
  newQuantity: number;
  setNewQuantity: React.Dispatch<React.SetStateAction<number>>
  handleQuantityEdit: (quantity: number, id: number) => void;
  quantityEditClicked: boolean;
  setQuantityEditClicked: React.Dispatch<React.SetStateAction<boolean>>
  id: number;
  isSomeEditOpen: boolean;
  setIsSomeEditOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const TableDataQuantity = ( {type, quantity, newQuantity, setNewQuantity, handleQuantityEdit, quantityEditClicked, setQuantityEditClicked, id, isSomeEditOpen, setIsSomeEditOpen}: Props ) => {
  const formatDollars = (val: string) => `$` + val;
  const formatOther = (val: string) => val;
  const parse = (val: string) => val.replace(/^\$/, '');

  const handleChange = (valueString: string) => {
    setNewQuantity(parseFloat(parse(valueString)))
  }

  const cancelUpdateQuantity = () => {
    setIsSomeEditOpen(!isSomeEditOpen);
    setQuantityEditClicked(!quantityEditClicked);
  }

  const handleSubmit = () => {
    handleQuantityEdit(newQuantity, id)
    setNewQuantity(0);
    setQuantityEditClicked(!quantityEditClicked);
  }

  const handleClick = () => {
    setIsSomeEditOpen(!isSomeEditOpen);
    setQuantityEditClicked(!quantityEditClicked)
  }


  return (
    <>
    {quantityEditClicked ? (
      <Td display={"flex"}>
      {type.toLowerCase() === 'money' ? (
        <NumberInput size='m'
        precision={2}
        onChange={(valueString) => handleChange(valueString)}
        value={formatDollars(newQuantity.toString())}
        max={10000}
        >
        <NumberInputField h={10} w={75}/>
      </NumberInput>
      ) : (
        <NumberInput size='m'
        precision={2}
        onChange={(valueString) => handleChange(valueString)}
        value={formatOther(newQuantity.toString())}
        max={200}
        >
        <NumberInputField h={10} w={75}/>
      </NumberInput>
      )}
      <IconButton
      onClick={handleSubmit}
      aria-label={"submit icon"}
      icon={<CheckIcon />}
      _hover={newQuantity ? { color: "green" } : { color: "red" }} background="none"
      size="sm"
      ></IconButton>
      <IconButton
      ml={2}
      mt={1}
      onClick={cancelUpdateQuantity}
      aria-label={"cancel icon"}
      icon={<CloseIcon />}
      background="none"
      size="xs"
      _hover={{ color: "red" }}
      ></IconButton>
    </Td>
    ) : (
      <Td>{type.toLowerCase() === 'money' ? `$${quantity}` : `${quantity} boxes/bags`}
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

export default TableDataQuantity;