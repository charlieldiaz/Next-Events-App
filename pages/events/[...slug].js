import { useRouter } from "next/router"
import { getFilteredEvents } from "../../dummy-data";
import EventList from '../../components/events/event-list'
import ResultsTitle from '../../components/results-title/results-title'
import Button from "../../components/ui/button";
import ErrorAlert from '../../components/ui/error-alert/error-alert'

export default function FilteredEventsPage() {
    const router = useRouter();

    const filterData = router.query.slug;

    if (!filterData) {
        return <p className="center">Loading...</p>;
    }

    const filteredYear = filterData[0];
    const filteredMonth = filterData[1];

    const numYear = +filteredYear
    const numMonth = +filteredMonth

    if (isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021 || numMonth < 1 || numMonth > 12) {
        return (
            <>
                <ErrorAlert>
                    <p>Invalid Filter, please adjust your values</p>
                    <div className="center">
                        <Button link='/events'>Show All Events</Button>
                    </div>
                </ErrorAlert>
            </>


        )
    }

    const filteredEvents = getFilteredEvents({ year: numYear, month: numMonth });

    if (!filteredEvents || filteredEvents.length === 0) {
        return (
            <>
                <ErrorAlert>
                    <p>No events found for the chosen filter!</p>
                    <div className="center">
                        <Button link='/events'>Show All Events</Button>
                    </div>
                </ErrorAlert>
            </>
        )
    }

    const date = new Date(numYear, numMonth - 1)
    return (
        <div>
            <ResultsTitle date={date} />
            <EventList items={filteredEvents} />
        </div>
    )
}