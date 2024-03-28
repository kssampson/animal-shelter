import { Box, FormControl, FormHelperText, FormLabel} from "@chakra-ui/react";
import DatePicker from "react-datepicker";

type Props = {
  donationDate: Date;
  setDonationDate: React.Dispatch<React.SetStateAction<Date>>;
}

const DonationDate = ( { donationDate, setDonationDate }: Props ) => {

  return (
    <FormControl pt={5} pb={5}>
      <FormLabel>Donation Date</FormLabel>
      <Box
        _hover={{
        background: "white",
        color: "gray.500",
        cursor: "pointer",
      }}>
      <DatePicker
        selected={donationDate ?? new Date()}
        onChange={(date) => setDonationDate(date ?? donationDate)}
      />
      </Box>
      <FormHelperText>Select a date.</FormHelperText>
    </FormControl>
  )
}

export default DonationDate;