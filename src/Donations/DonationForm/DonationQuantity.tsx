import { FormControl, FormErrorMessage, FormHelperText, FormLabel, NumberInput, NumberInputField } from "@chakra-ui/react";

type Props = {
  donationType: string;
  donationQuantity: number;
  setDonationQuantity: React.Dispatch<React.SetStateAction<number>>;
  isErrorDonationQuantity: boolean;
}

const DonationQuantity = ( {donationType, donationQuantity, setDonationQuantity, isErrorDonationQuantity}: Props ) => {

  const formatDollars = (val: string) => `$` + val;
  const formatOther = (val: string) => val;
  const parse = (val: string) => val.replace(/^\$/, '');

  const handleChange = (valueString: string) => {
    setDonationQuantity(parseFloat(parse(valueString)))
  }

  return (
    <FormControl pt={2} pb={2} isInvalid={isErrorDonationQuantity}>
      {donationType.toLowerCase() === 'money' ? (
        <>
          <FormLabel>Amount</FormLabel>
          <NumberInput
            size='m'
            precision={2}
            onChange={(valueString) => handleChange(valueString)}
            value={formatDollars(donationQuantity.toString())}
            min={0}
            max={10000}
          >
            <NumberInputField h={10} w={75} borderRadius={'10px'}/>
          </NumberInput>
          {!isErrorDonationQuantity ? (
        <FormHelperText>
          Enter an amount.
        </FormHelperText>
      ) : (
        <FormErrorMessage>Amount is required</FormErrorMessage>
      )}
        </>
      ) : (
        <>
          <FormLabel>Quantity</FormLabel>
          <NumberInput
            size='m'
            precision={2}
            onChange={(valueString) => handleChange(valueString)}
            value={formatOther(donationQuantity.toString())}
            min={0}
            max={200}
          >
          <NumberInputField h={10} w={75} borderRadius={'10px'}/>
          </NumberInput>
          {!isErrorDonationQuantity ? (
        <FormHelperText>
        {` Enter quantity (boxes/bags, etc.)`}
        </FormHelperText>
      ) : (
        <FormErrorMessage>Quantity is required</FormErrorMessage>
      )}
        </>
          )}
    </FormControl>
  )
}

export default DonationQuantity;