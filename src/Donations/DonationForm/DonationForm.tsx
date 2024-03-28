import { Box, FormControl } from "@chakra-ui/react";
import FirstName from "./FirstName";
import { useState } from "react";
import LastName from "./LastName";
import DonationType from "./DonationType";
import DonationQuantity from "./DonationQuantity";
import DonationDate from "./DonationDate";
import { Button } from '@chakra-ui/react'
import { validateInputs } from "../../utils/validateInputs";
import { Donation } from "../../App";

type Props = {
  filterOptions: string[];
  updateDonations: (firstName: string, lastName: string, donationDate: Date, donationQuantity: number, donationType: string) => void;
}

const DonationForm = ( { filterOptions, updateDonations }: Props ) => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [donationType, setDonationType] = useState('');
  const [donationQuantity, setDonationQuantity] = useState(0);
  const [donationDate, setDonationDate] = useState(new Date());

  const [isFirstNameSubmitted, setIsFirstNameSubmitted] = useState(false);
  const [isLastNameSubmitted, setIsLastNameSubmitted] = useState(false);
  const [isDonationTypeSubmitted, setIsDonationTypeSubmitted] = useState(false);
  const [isDonationQuantitySubmitted, setIsDonationQuantitySubmitted] = useState(false);
  // const [isDonationDateSubmitted, setIsDonationDateSubmitted] = useState(false);

  const isErrorFirstName = firstName === '' && isFirstNameSubmitted;
  const isErrorLastName = lastName === '' && isLastNameSubmitted;
  const isErrorDonationType = donationType === '' && isDonationTypeSubmitted;
  const isErrorDonationQuantity = donationQuantity <= 0 && isDonationQuantitySubmitted;

  console.log('isErrorQuantity: ', isErrorDonationQuantity)
  console.log('donatationQuantity: ', donationQuantity)

  const handleDonationSubmit = () => {
    setIsFirstNameSubmitted(true);
    setIsLastNameSubmitted(true);
    setIsDonationTypeSubmitted(true);
    setIsDonationQuantitySubmitted(true);
    // setIsDonationDateSubmitted(true);
    if (validateInputs.allInputsValid(firstName, lastName, donationDate, donationQuantity, donationType, filterOptions)) {
      updateDonations(firstName, lastName, donationDate, donationQuantity, donationType);
      setFirstName('');
      setLastName('');
      setDonationType('');
      setDonationQuantity(0);
      setDonationDate(new Date());
      setIsFirstNameSubmitted(false);
      setIsLastNameSubmitted(false);
      setIsDonationTypeSubmitted(false);
      setIsDonationQuantitySubmitted(false);
      // setIsDonationDateSubmitted(false);
    } else {
      return null;
    }
  }

  return (
    <Box p={10} display={"flex"} flexDir={"column"}>
      <FormControl>
        <FirstName firstName={firstName} setFirstName={setFirstName} isErrorFirstName={isErrorFirstName}/>
        <LastName lastName={lastName} setLastName={setLastName} isErrorLastName={isErrorLastName}/>
        <DonationType filterOptions={filterOptions} donationType={donationType} setDonationType={setDonationType} isErrorDonationType={isErrorDonationType}/>
        <DonationQuantity donationType={donationType} donationQuantity={donationQuantity} setDonationQuantity={setDonationQuantity} isErrorDonationQuantity={isErrorDonationQuantity}/>
        <DonationDate donationDate={donationDate} setDonationDate={setDonationDate}/>
      </FormControl>
      <Button onClick={handleDonationSubmit} colorScheme='blue'>Submit</Button>
    </Box>
  )
}

export default DonationForm;