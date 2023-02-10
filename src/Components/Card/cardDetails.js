import piggy from "/assets/piggy.png";
import flex from "/assets/flex.png";
import safelock from "/assets/safelock.png";
import target from "/assets/target.png";

const cardDetails = [
 {
  topIcon: piggy,
  name: "Automated Savings",
  words:
   "Build a dedicated savings faster on your terms automatically or manually.",
  title: "Piggybank",
  color: "#003399",
  to: "piggybank",
 },
 {
  topIcon: safelock,
  name: "Fixed Savings",
  words:
   "Lock money away for a fixed duration with no access to it until maturity. It’s like having a custom fixed deposit.",
  title: "Safelock",
  color: "#3296FF",
  to: "safelock",
 },
 {
  topIcon: target,
  name: "Goal-oriented Savings",
  words:
   "Reach all your savings goals faster. Save towards multiple goals on your own or with a group.",
  title: "Target Savings",
  color: "#069B40",
  to: "targets",
 },
 {
  topIcon: flex,
  name: "Flexible Savings",
  words:
   "Save, transfer, withdraw, manage and organise your money for free at any time.",
  title: "Flex Naira",
  color: "#E5288E",
  to: "flex-naira",
 },
];

export default cardDetails;
