
export const metadata={
    title: "Cancellations, Reschedules & Refunds | The Starry Nights",
    description: "Cancellations, Reschedules & Refunds policy for The Starry Nights",
}

const CancellationRescheduleRefunds = () => {

    return (
        <div className='pt-14 text-lg lg:pt-[100px]'> 
           
            <div className="max-w-4xl mx-auto p-6 bg-white  rounded-lg">
                <h1 className="text-xl md:text-2xl text-center font-medium mb-6">
                    Cancellations, Reschedules & Refunds{" "}
                </h1>

                <section className="mb-8">
                    <h2 className="text-xl font-medium mb-4">Cancellations Policy</h2>
                    <ul className="list-disc ml-6">
                        <li>
                            A cancellation fee of Rs 1000 applies to any reservation
                            cancellation, regardless of the reservation date or the
                            cancellation date.
                        </li>
                        <li>
                            Cancellations made 15 days or more before the trip start date will
                            incur no cancellation fee.
                        </li>
                        <li>
                            Cancellations made 7-9 days before the trip start date will incur
                            a cancellation fee of 25% of the booking value.
                        </li>
                        <li>
                            Cancellations made 3-6 days before the trip start date will incur
                            a cancellation fee of 50% of the booking value.
                        </li>
                        <li>
                            Cancellations made 0-2 days before the trip start date will incur
                            a cancellation fee of 100% of the booking value.
                        </li>
                        <li>
                            In the case of a No-Show, no refunds or rescheduling will be
                            provided.
                        </li>
                        <li>
                            For reservations made for special events such as "New Year’s Eve,"
                            "Christmas," or festivals, cancellations and rescheduling are not
                            permitted.
                        </li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-medium mb-4">Rescheduling Policy</h2>
                    <ul className="list-disc ml-6">
                        <li>
                            Guests can reschedule their reservation free of charge if the
                            request is made at least 7 days before the original check-in date.
                        </li>
                        <li>Each reservation can be rescheduled only once.</li>
                        <li>
                            Rescheduling is subject to room availability on the desired new
                            dates.
                        </li>
                        <li>
                            The rescheduled check-in date must be within 90 days of the
                            original check-in date.
                        </li>
                        <li>
                            At the time of the rescheduling request, customers must settle
                            100% of the package amount.
                        </li>
                        <li>
                            Rescheduled reservations cannot be canceled or further
                            rescheduled.
                        </li>
                        <li>
                            Rescheduling for reservations made during special events (such as
                            New Year’s Eve, Christmas, or festivals) and peak seasons is not
                            permitted.
                        </li>
                        <li>
                            In case of a no-show on the rescheduled date, no refund or further
                            rescheduling will be offered.
                        </li>
                        <li>
                            In the event of unforeseen circumstances such as natural disasters
                            or government restrictions, guests may be offered a credit voucher
                            for future stays instead of a rescheduling option.
                        </li>
                    </ul>
                </section>

                <section className="mt-8">
                    <h2 className="text-xl font-medium mb-4">Refund Policy</h2>
                    <ul className="list-disc ml-6">
                        <li>
                            Cancellations made 15 days or more before the check-in date will
                            receive a full refund.
                        </li>
                        <li>
                            Cancellations made between 3 to 14 days before the check-in date
                            will receive a 25% to 50% refund of the booking amount.
                        </li>
                        <li>
                            Cancellations made less than 2 days before the check-in date will
                            not be eligible for a refund.
                        </li>
                        <li>In case of a no-show, no refund will be provided.</li>
                        <li>
                            For bookings made during special events such as New Year's Eve,
                            Christmas, or festivals, cancellations and rescheduling are not
                            permitted, and no refund will be provided.
                        </li>
                        <li>
                            A standard cancellation fee of Rs 1000 applies to all
                            cancellations, irrespective of the reservation and cancellation
                            date.
                        </li>
                        <li>
                            All refunds will be processed within 3 to 7 working days from the
                            date of cancellation.
                        </li>
                        <li>
                            Refunds will be credited back to the original payment method used
                            for the booking.
                        </li>
                        <li>
                            In case of cancellation due to unforeseen events such as natural
                            disasters, government restrictions, or other force majeure
                            circumstances, the resort will offer a credit voucher for future
                            stays instead of a monetary refund.
                        </li>
                        <li>
                            If guests decide to check out earlier than the scheduled departure
                            date, no refund will be provided for the unused nights.
                        </li>
                    </ul>
                </section>

                <div className="mt-5">
                    For any disputes or further clarifications, please contact our
                    reservations team at{" "}
                    <a className="text-blue-500" href="mailto:bookings.starrynights@gmail.com">
                        {" "}
                        bookings.starrynights@gmail.com
                    </a>{" "}
                    or <a href="tel:+91 8867352400" className="text-blue-500">+91 8867352400 </a>
                    with the subject: Rescheduling Inquiry.
                </div>
            </div>{" "}
        </div>
    );
};

export default CancellationRescheduleRefunds;
