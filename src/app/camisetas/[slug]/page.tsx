export default async function Camiseta({
    params,
}: {
    params: { slug: string }
}) {
    const { slug } = await params;

    return (
        <div>
            <h1>Camiseta {slug}</h1>
        </div>
    )
} 