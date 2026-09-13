import book1 from "../../assets/images/Book1.png";
import book2 from "../../assets/images/Book2.png";

function AdminDashboard() {
  return (
    <div className="flex min-h-screen bg-[#fdf6e3]">

      {/* Main Content */}
      <main className="ml-[240px] min-h-screen flex-1 p-8">

        {/* Heading */}
        <h1 className="mb-8 text-3xl font-bold text-[#00391c]">
          Dashboard
        </h1>


        {/* Dashboard Cards */}
        <div className="mb-10 grid grid-cols-4 gap-5">

          <div className="rounded-xl bg-white p-6 text-center shadow-md">
            <h2 className="text-3xl font-bold text-[#004225]">
              245
            </h2>
            <p className="mt-2 text-gray-600">
              Total Books
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 text-center shadow-md">
            <h2 className="text-3xl font-bold text-[#004225]">
              91
            </h2>
            <p className="mt-2 text-gray-600">
              Users
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 text-center shadow-md">
            <h2 className="text-3xl font-bold text-[#004225]">
              43
            </h2>
            <p className="mt-2 text-gray-600">
              Exchange Requests
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 text-center shadow-md">
            <h2 className="text-3xl font-bold text-[#004225]">
              12
            </h2>
            <p className="mt-2 text-gray-600">
              Pending Approval
            </p>
          </div>

        </div>


        {/* Recent Books */}
        <section>

          <h2 className="mb-5 text-2xl font-bold text-[#00391c]">
            Recent Books
          </h2>

          <div className="overflow-x-auto rounded-xl bg-white shadow-md">

            <table className="w-full min-w-[700px] border-collapse">

              <thead>
                <tr className="bg-[#004225] text-left text-white">

                  <th className="px-5 py-4">
                    Cover
                  </th>

                  <th className="px-5 py-4">
                    Title
                  </th>

                  <th className="px-5 py-4">
                    Author
                  </th>

                  <th className="px-5 py-4">
                    Genre
                  </th>

                  <th className="px-5 py-4">
                    Action
                  </th>

                </tr>
              </thead>


              <tbody>

                <tr className="border-b border-gray-200">

                  <td className="px-5 py-4">
                    <img
                      src={book1}
                      alt="Raja Gidh"
                      className="h-20 w-14 object-contain"
                    />
                  </td>

                  <td className="px-5 py-4 font-medium">
                    Raja Gidh
                  </td>

                  <td className="px-5 py-4">
                    Bano Qudsia
                  </td>

                  <td className="px-5 py-4">
                    Novel
                  </td>

                  <td className="px-5 py-4">

                    <div className="flex gap-2">

                      <button
                        className="rounded-md bg-blue-600 px-4 py-2 text-sm text-white transition hover:bg-blue-700"
                      >
                        Edit
                      </button>

                      <button
                        className="rounded-md bg-red-600 px-4 py-2 text-sm text-white transition hover:bg-red-700"
                      >
                        Delete
                      </button>

                    </div>

                  </td>

                </tr>


                <tr className="border-b border-gray-200">

                  <td className="px-5 py-4">
                    <img
                      src={book2}
                      alt="Namal"
                      className="h-20 w-14 object-contain"
                    />
                  </td>

                  <td className="px-5 py-4 font-medium">
                    Namal
                  </td>

                  <td className="px-5 py-4">
                    Nimra Ahmed
                  </td>

                  <td className="px-5 py-4">
                    Novel
                  </td>

                  <td className="px-5 py-4">

                    <div className="flex gap-2">

                      <button
                        className="rounded-md bg-blue-600 px-4 py-2 text-sm text-white transition hover:bg-blue-700"
                      >
                        Edit
                      </button>

                      <button
                        className="rounded-md bg-red-600 px-4 py-2 text-sm text-white transition hover:bg-red-700"
                      >
                        Delete
                      </button>

                    </div>

                  </td>

                </tr>

              </tbody>

            </table>

          </div>

        </section>

      </main>

    </div>
  );
}

export default AdminDashboard;