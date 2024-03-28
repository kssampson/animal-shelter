import { Box, Table, TableCaption, TableContainer, Tbody, Tfoot, Th, Thead, Tr, Text, RadioGroup, Stack, Radio, Icon, IconButton } from "@chakra-ui/react";
import { Donation } from "../../App";
import TableData from "./TableData";
import { useEffect, useState } from "react";
import { DeleteIcon } from "@chakra-ui/icons";

type Props = {
  donations: Donation[];
  setDonations: React.Dispatch<React.SetStateAction<(Donation)[]>>;
  handleNameEdit: (newName: string, id: number) => void;
  handleDateEdit: (newDate: Date, id: number) => void;
  handleTypeEdit: (newType: string, id: number) => void;
  handleQuantityEdit: (quantity: number, id: number) => void;
  filterOptions: string[];
  deleteDonation: (id: number) => void;
}

const DonationList = ( {donations, setDonations, handleNameEdit, handleDateEdit, handleTypeEdit, handleQuantityEdit, filterOptions, deleteDonation}: Props ) => {

  const [filteredDonations, setFilteredDonations] = useState(donations);
  const [filterValue, setFilterValue] = useState('All Items');

  useEffect(() => {
    const currentFilter = donations.filter((donation) => donation.type === filterValue);
    filterValue === "All Items" ? setFilteredDonations(donations) : setFilteredDonations(currentFilter);
  }, [donations, filterValue])

  return (
    <Box>
      <Box display={"flex"} m={25} justifyContent={"flex-end"}>
        <Text mr={5}>Filter by: </Text>
        <RadioGroup onChange={setFilterValue} value={filterValue}>
          <Stack direction='row'>
            {filterOptions.map((option, idx) => <Radio key={idx} value={option}>{`${option}`}</Radio>)}
          </Stack>
        </RadioGroup>
      </Box>
      <TableContainer>
        {filteredDonations.length ? (
          <Table colorScheme='teal'>
          <TableCaption>Donation Inventory</TableCaption>
          <Thead>
            <Tr>
              <Th>Donor name</Th>
              <Th>Donation Type</Th>
              <Th>Quantity</Th>
              <Th>Donated Date</Th>
            </Tr>
          </Thead>
          <Tbody>
              {filteredDonations.map((donation) => {
                return (
                  <Tr
                  key={donation.id}
                  >
                    <TableData
                    donorName={donation.donorName}
                    type={donation.type}
                    quantity={donation.quantity}
                    date={donation.date}
                    handleNameEdit={handleNameEdit}
                    id={donation.id}
                    handleDateEdit={handleDateEdit}
                    handleTypeEdit={handleTypeEdit}
                    handleQuantityEdit={handleQuantityEdit}
                    />
                    <IconButton
                      onClick={() => deleteDonation(donation.id)}
                      aria-label={"cancel icon"}
                      icon={<DeleteIcon />}
                      background="none"
                      size="xs"
                      _hover={{ color: "red" }}
                      mt={5}
                    ></IconButton>
                  </Tr>
                )
              })}
          </Tbody>
          <Tfoot>
          <Tr>
              <Th>Donor name</Th>
              <Th>Donation Type</Th>
              <Th>Quantity</Th>
              <Th>Donated Date</Th>
            </Tr>
          </Tfoot>
        </Table>
        ) : (
          <Table>
            <TableCaption
            fontSize={'large'}
            pb={25}
            >No Donations in this category!
            </TableCaption>
          </Table>
        )}
      </TableContainer>
    </Box>
  )
}

export default DonationList;