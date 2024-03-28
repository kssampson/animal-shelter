import { Box, Card, CardBody, Stat, StatHelpText, StatLabel, StatNumber} from "@chakra-ui/react";
import { Donation } from "../App";
import { useEffect, useState } from "react";

type Props = {
  donations: Donation[];
}

const DonationStats = ( {donations}: Props ) => {

  const [totalMoney, setTotalMoney] = useState(0);
  const [totalFood, setTotalFood] = useState(0);
  const [totalClothing, setTotalClothing] = useState(0);

  useEffect(() => {
    let money = donations.reduce((acc, currVal) => {
      if (currVal.type === 'Money')
      acc += currVal.quantity;
      return acc;
    }, 0)
    let food = donations.reduce((acc, currVal) => {
      if (currVal.type === 'Food')
      acc += currVal.quantity;
      return acc;
    }, 0)
    let clothing = donations.reduce((acc, currVal) => {
      if (currVal.type === 'Clothing')
      acc += currVal.quantity;
      return acc;
    }, 0)
    setTotalMoney(money);
    setTotalFood(food);
    setTotalClothing(clothing);
  }, [donations])

  return (
    <>
      {donations && (
        <Box display={"flex"} p={10}>
            <Card m={5}>
              <CardBody>
              <Stat>
                <StatLabel>Total Money Donated</StatLabel>
                <StatNumber>{`$${totalMoney}`}</StatNumber>
                <StatHelpText>{`from ${donations.filter((donation) => donation.type === 'Money').length} donations`}</StatHelpText>
              </Stat>
              </CardBody>
            </Card>
          <Card m={5}>
            <CardBody>
            <Stat>
                <StatLabel>Total Food</StatLabel>
                <StatNumber>{`${totalFood} boxes/bags`}</StatNumber>
                <StatHelpText>{`from ${donations.filter((donation) => donation.type === 'Food').length} donations`}</StatHelpText>
              </Stat>
            </CardBody>
          </Card>
          <Card m={5}>
            <CardBody>
            <Stat>
                <StatLabel>Total Clothing</StatLabel>
                <StatNumber>{`${totalClothing} boxes/bags`}</StatNumber>
                <StatHelpText>{`from ${donations.filter((donation) => donation.type === 'Clothing').length} donations`}</StatHelpText>
              </Stat>
            </CardBody>
          </Card>
        </Box>
        )}
    </>
  )
}

export default DonationStats;