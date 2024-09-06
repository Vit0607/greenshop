import Headling from '../../components/Headling/Headling';

export function Home() {
    return (
        <>
            <Headling>
                Let's make a better <span>planet</span>
            </Headling>
            <Headling level={2} classLevel={2}>
                Our Blog Posts
            </Headling>
            <Headling classLevel={3}>Barberton Daisy</Headling>
        </>
    );
}
