import React, { useState } from 'react';
import { Box} from '@chakra-ui/react';
import DonationForm from './Donations/DonationForm/DonationForm'
import DonationList from './Donations/DonationList/DonationList';
import DonationStats from './Donations/DonationStats';

const fakeDonations = [
  {
    id: 1,
    donorName: "Andrés Segovia",
    type: "Money",
    quantity: 100,
    date: new Date("Fri Mar 20 2024 00:00:00 GMT-0700 (Pacific Daylight Time)")
  },
  {
    id: 2,
    donorName: "John Williams",
    type: "Food",
    quantity: 10,
    date: new Date("Thu Mar 19 2024 00:00:00 GMT-0700 (Pacific Daylight Time)")
  },
  {
    id: 3,
    donorName: "Julian Bream",
    type: "Clothing",
    quantity: 5,
    date: new Date("Wed Mar 18 2024 00:00:00 GMT-0700 (Pacific Daylight Time)")
  },
  {
    id: 4,
    donorName: "Christopher Parkening",
    type: "Money",
    quantity: 50,
    date: new Date("Tue Mar 17 2024 00:00:00 GMT-0700 (Pacific Daylight Time)")
  },
  {
    id: 5,
    donorName: "Paco de Lucía",
    type: "Food",
    quantity: 8,
    date: new Date("Mon Mar 16 2024 00:00:00 GMT-0700 (Pacific Daylight Time)")
  },
  {
    id: 6,
    donorName: "Manuel Barrueco",
    type: "Clothing",
    quantity: 3,
    date: new Date("Sun Mar 15 2024 00:00:00 GMT-0700 (Pacific Daylight Time)")
  },
  {
    id: 7,
    donorName: "Andrés Torres Segovia",
    type: "Money",
    quantity: 75,
    date: new Date("Sat Mar 14 2024 00:00:00 GMT-0700 (Pacific Daylight Time)")
  },
  {
    id: 8,
    donorName: "David Russell",
    type: "Food",
    quantity: 5,
    date: new Date("Fri Mar 13 2024 00:00:00 GMT-0700 (Pacific Daylight Time)")
  },
  {
    id: 9,
    donorName: "Sharon Isbin",
    type: "Clothing",
    quantity: 6,
    date: new Date("Thu Mar 12 2024 00:00:00 GMT-0700 (Pacific Daylight Time)")
  },
  {
    id: 10,
    donorName: "Andrés Segovia",
    type: "Money",
    quantity: 120,
    date: new Date("Wed Mar 11 2024 00:00:00 GMT-0700 (Pacific Daylight Time)")
  }
];

export type Donation = {
    id: number,
    donorName: string,
    type: string,
    quantity: number,
    date: Date;
}

function App() {

  const [donations, setDonations] = useState(fakeDonations);
  const [isSomeEditOpen, setIsSomeEditOpen] = useState(false);

  const filterOptions = ['Money', 'Food', 'Clothing', 'All Items'];

  const handleNameEdit = (newName: string, id: number) => {
    const updated = donations.map((donation) => {
      if (donation.id === id) {
        donation.donorName = newName;
      }
      return donation;
    })
    setIsSomeEditOpen(!isSomeEditOpen);
    setDonations(updated);
  }

  const handleDateEdit = (newDate: Date, id: number) => {
    const updated = donations.map((donation) => {
      if (donation.id === id) {
        donation.date = newDate;
      }
      return donation;
    })
    setIsSomeEditOpen(!isSomeEditOpen);
    setDonations(updated);
  }

  const handleTypeEdit = (newType: string, id: number) => {
    const updated = donations.map((donation) => {
      if (donation.id === id) {
        donation.type = newType;
      }
      return donation;
    })
    setIsSomeEditOpen(!isSomeEditOpen);
    setDonations(updated);
  }

  const handleQuantityEdit = (quantity: number, id: number) => {
    const updated = donations.map((donation) => {
      if (donation.id === id) {
        donation.quantity = quantity;
      }
      return donation;
    })
    setIsSomeEditOpen(!isSomeEditOpen);
    setDonations(updated);
  }

  const updateDonations = (firstName: string, lastName: string, donationDate: Date, donationQuantity: number, donationType: string) => {
    let numOfDonationsPlusOne = donations.length + 1;
    let newDonation = {
      id: numOfDonationsPlusOne,
      donorName: `${firstName} ${lastName}`,
      type: donationType,
      quantity: donationQuantity,
      date: donationDate
    }
    setDonations([...donations, newDonation]);
  }

  const deleteDonation = (id: number) => {
    const updated = donations.filter((donation) => {
      return donation.id !== id;
    })
    setDonations(updated)
  }

  return (
      <Box display={"flex"} flexDir={"column"} alignItems={"center"}>
        <Box>
          <Box display={'flex'} flexDirection={'column'}>
            <DonationForm
              filterOptions={filterOptions}
              updateDonations={updateDonations}
              />
              <DonationStats
                donations={donations}
              />
          </Box>
          <DonationList
            donations={donations}
            setDonations={setDonations}
            handleNameEdit={handleNameEdit}
            handleDateEdit={handleDateEdit}
            handleTypeEdit={handleTypeEdit}
            handleQuantityEdit={handleQuantityEdit}
            filterOptions={filterOptions}
            deleteDonation={deleteDonation}
            isSomeEditOpen={isSomeEditOpen}
            setIsSomeEditOpen={setIsSomeEditOpen}
          />
        </Box>
      </Box>
  );
}

export default App;
