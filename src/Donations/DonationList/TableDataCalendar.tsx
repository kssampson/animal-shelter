import { CloseIcon, EditIcon } from "@chakra-ui/icons";
import { IconButton, Td } from "@chakra-ui/react";
import DatePicker from "react-datepicker";

type Props = {
  startDate: Date;
  setStartDate: React.Dispatch<React.SetStateAction<Date>>;
  dateEditClicked: boolean;
  setDateEditClicked: React.Dispatch<React.SetStateAction<boolean>>;
  id: number;
  handleDateEdit: (newDate: Date, id: number) => void;
  isSomeEditOpen: boolean;
  setIsSomeEditOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const TableDataCalendar = ( {startDate, setStartDate, dateEditClicked, setDateEditClicked, id, handleDateEdit, isSomeEditOpen, setIsSomeEditOpen}: Props ) => {

  const handleSelect = () => {
    handleDateEdit(startDate, id);
    setDateEditClicked(!dateEditClicked);
  }

  const cancelUpdateDate = (e: any) => {
    setIsSomeEditOpen(!isSomeEditOpen);
    setDateEditClicked(!dateEditClicked);
  }

  const handleClick = () => {
    setIsSomeEditOpen(!isSomeEditOpen);
    setDateEditClicked(!dateEditClicked);
  }

  return (
    <>
    {dateEditClicked ? (
      <Td display="flex" justifyContent={"space-between"}>
      <DatePicker
      selected={startDate ?? new Date()}
      onSelect={handleSelect}
      onChange={(date) => setStartDate(date ?? startDate)}
      />
      <IconButton
      onClick={cancelUpdateDate}
      aria-label={"cancel icon"}
      icon={<CloseIcon />}
      background="none"
      size="xs"
      _hover={{ color: "red" }}
      ></IconButton>
    </Td>
    ) : (
      <Td>{startDate.toLocaleDateString('en-US')}
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

export default TableDataCalendar;