import { FormControl, FormErrorMessage, FormHelperText, FormLabel, Input } from "@chakra-ui/react";

type Props = {
  firstName: string;
  isErrorFirstName: boolean;
  setFirstName: React.Dispatch<React.SetStateAction<string>>
}

const FirstName = ( { firstName, isErrorFirstName, setFirstName}: Props ) => {

  const handleChangeFirstName = (e: any) => setFirstName(e.target.value);

  return (
    <>
      <FormControl isInvalid={isErrorFirstName}>
      <FormLabel>First Name</FormLabel>
      <Input type='text' value={firstName} onChange={handleChangeFirstName} />
      {!isErrorFirstName ? (
        <FormHelperText>
          Enter your first name.
        </FormHelperText>
      ) : (
        <FormErrorMessage>First name is required.</FormErrorMessage>
      )}
    </FormControl>
    </>
  )
}

export default FirstName;