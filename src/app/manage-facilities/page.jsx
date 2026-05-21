import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
// import DeleteButton from "./DeleteButton";
import Link from "next/link";
import DeleteButton from "../components/DeleteButton";
import { EditModal } from "../components/EditModal";
import { DeleteAlert } from "../components/DeleteAlert";

const ManageFacilitiesPage = async () => {

    const session = await auth.api.getSession({
        headers: await headers(),
    });

    // PRIVATE ROUTE
    if (session) {
        console.log(session.user.email)
    }

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/facilities?email=${session?.user.email}`,
        {
            cache: "no-store",
        }
    );

    const facilities = await res.json();

    if (!facilities || facilities.length === 0) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <p className="text-gray-500 text-lg">No facilities found.</p>
            </div>
        );
    }
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

                    <div className="flex  items-center gap-3 justify-end mt-5 mb-3">
                        <EditModal facility={f} />
                        <DeleteAlert
                            facility={f}
                            email={session?.user?.email}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ManageFacilitiesPage;