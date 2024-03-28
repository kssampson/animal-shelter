import { FormControl, FormErrorMessage, FormHelperText, FormLabel, HStack, Radio, RadioGroup } from "@chakra-ui/react";

type Props = {
  filterOptions: string[];
  donationType: string;
  setDonationType: React.Dispatch<React.SetStateAction<string>>;
  isErrorDonationType: boolean;
}

const DonationType = ( {filterOptions, donationType, setDonationType, isErrorDonationType}: Props ) => {

  return (
    <FormControl pt={5} pb={5} isInvalid={isErrorDonationType}>
      <FormLabel>
        Donation type
      </FormLabel>
      <RadioGroup defaultValue={filterOptions[1]} onChange={setDonationType} value={donationType}>
        <HStack spacing='24px'>
          {filterOptions.slice(1).map((option, idx) => <Radio key={idx} value={option}>{`${option}`}</Radio>)}
        </HStack>
      </RadioGroup>
      {!isErrorDonationType ? (
        <FormHelperText>Select donation type.</FormHelperText>
      ) : (
        <FormErrorMessage>Donation type is required.</FormErrorMessage>
      )}
    </FormControl>
  )
}

export default DonationType;