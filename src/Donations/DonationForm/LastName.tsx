import { FormControl, FormErrorMessage, FormHelperText, FormLabel, Input } from "@chakra-ui/react";

type Props = {
  lastName: string;
  isErrorLastName: boolean;
  setLastName: React.Dispatch<React.SetStateAction<string>>;
}

const FirstName = ( { lastName, isErrorLastName, setLastName }: Props ) => {

  const handleChangeLastName = (e: any) => setLastName(e.target.value);

  return (
    <>
      <FormControl isInvalid={isErrorLastName} pt={5}>
      <FormLabel>Last Name</FormLabel>
      <Input type='text' value={lastName} onChange={handleChangeLastName} />
      {!isErrorLastName ? (
        <FormHelperText>
          Enter your last name.
        </FormHelperText>
      ) : (
        <FormErrorMessage>Last name is required.</FormErrorMessage>
      )}
    </FormControl>
    </>
  )
}

export default FirstName;