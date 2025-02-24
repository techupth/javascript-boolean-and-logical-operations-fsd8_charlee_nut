// Exercise #2: Promotion Conditions

// Start coding here
let lastMonthPaidMoreThan4000;
let isWeekday;
let hasBoughtProductFromITCategory;
let hasAttendedDiscountEvent;
let isPlatinum;

let hasPromotion;
hasPromotion =
	(lastMonthPaidMoreThan4000 > 4000 &&
		!(isWeekday == "Saturday", isWeekday == "Sunday") &&
		!hasBoughtProductFromITCategory &&
		!hasAttendedDiscountEvent) ||
	isPlatinum == "Platinum";
//John
lastMonthPaidMoreThan4000 = 4001;
isWeekday = "friday";
hasBoughtProductFromITCategory = false;
hasAttendedDiscountEvent = true;
isPlatinum = "Gold";

console.log(hasPromotion);
