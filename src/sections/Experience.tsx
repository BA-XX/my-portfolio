import Timeline from "@/components/Timeline";
import experience from "@/data/experience";

function Experience() {
    return (
        <section id="experience">
            <Timeline experiences={experience} />
        </section>
    );
}

export default Experience;