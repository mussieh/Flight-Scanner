import FlightList from "@/components/FlightList";
import SearchOptionsHeader from "../components/SearchOptionsHeader";

const Flights = () => {
    return (
        <main>
            <section className="bg-flight-page-background">
                <SearchOptionsHeader />
                <FlightList />
            </section>
        </main>
    );
};
export default Flights;
