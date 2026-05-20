import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
// import DeleteButton from "./DeleteButton";
import Link from "next/link";
import DeleteButton from "../components/DeleteButton";

const ManageFacilitiesPage = async () => {

    const session = await auth.api.getSession({
        headers: await headers(),
    });

    // PRIVATE ROUTE
    if (session) {
        console.log(session.user.email)
    }

    const res = await fetch(
        `http://localhost:5000/facilities?email=${session.user.email}`,
        {
            cache: "no-store",
        }
    );

    const facilities = await res.json();

    return (
        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {facilities.map((f) => (
                <div key={f._id} className="border p-4 rounded-xl shadow">
                    <Image
                        src={f.imageUrl}
                        alt={f.name}
                        width={400}
                        height={200}
                        className="rounded-lg"
                    />

                    <h2 className="text-xl font-bold mt-2">{f.name}</h2>
                    <p>{f.location}</p>
                    <p>${f.price_per_hour}/hr</p>

                    <div className="flex gap-3 mt-3">
                        <Link
                            href={`/manage-facilities/edit/${f._id}`}
                            className="bg-blue-500 text-white px-3 py-1 rounded"
                        >
                            Update
                        </Link>

                        <DeleteButton id={f._id} email={session.user.email} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ManageFacilitiesPage;