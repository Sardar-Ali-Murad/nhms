// import React from "react";

// const RiskFactorApproach = () => {
//   // Function to generate random 4-digit IDs
//   const generateRandomId = () => Math.floor(1000 + Math.random() * 9000);

//   // Function to generate random IP addresses
//   const generateRandomIp = () =>
//     `${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`;

//   // Function to generate random MAC addresses
//   const generateRandomMac = () =>
//     Array.from({ length: 6 }, () =>
//       Math.floor(Math.random() * 256)
//         .toString(16)
//         .padStart(2, "0")
//     ).join(":").toUpperCase();

//   // Function to generate random satellite names
//   const generateSatelliteName = (index) => `Satellite-${index + 1}`;

//   // Mock data for 10 rows
//   const mockData = Array.from({ length: 10 }, (_, index) => ({
//     id: generateRandomId(),
//     dateTime: `2024-11-2${index} 14:0${index}:00`,
//     ipAddress: generateRandomIp(),
//     macAddress: generateRandomMac(),
//     satelliteName: generateSatelliteName(index),
//     description: "",
//   }));

//   return (
//     <div>
//       <div className="container">
//         <div className="row mb-5">
//           <div className="col-lg-12">
//             <div className="table-responsive">
//               <table className="table w-100 table-bordered table-hover rounded equal-columns">
//                 <thead className="bg-secondary text-white">
//                   <tr>
//                     <th className="sr-col">ID</th>
//                     <th>Date Time</th>
//                     <th>IP Address</th>
//                     <th>Mac Address</th>
//                     <th>Satellite Name</th>
//                     <th>Description</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {mockData.map((row) => (
//                     <tr key={row.id}>
//                       <td>{row.id}</td>
//                       <td>{row.dateTime}</td>
//                       <td>{row.ipAddress}</td>
//                       <td>{row.macAddress}</td>
//                       <td>{row.satelliteName}</td>
//                       <td>
//                         <textarea
//                           className="form-control"
//                           placeholder="Enter Reason"
//                           id={`textarea-${row.id}`}
//                           maxLength={1500}
//                         ></textarea>
//                         <label className="word-limit-info label-text">
//                           Maximum 1500 words
//                         </label>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RiskFactorApproach;

import React from "react";

const RiskFactorApproach = () => {
  // Function to generate random 4-digit IDs
  const generateRandomId = () => Math.floor(1000 + Math.random() * 9000);

  // Function to generate random IP addresses
  const generateRandomIp = () =>
    `${Math.floor(Math.random() * 255)}.${Math.floor(
      Math.random() * 255
    )}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`;

  // Function to generate random MAC addresses
  const generateRandomMac = () =>
    Array.from({ length: 6 }, () =>
      Math.floor(Math.random() * 256)
        .toString(16)
        .padStart(2, "0")
    )
      .join(":")
      .toUpperCase();

  // Function to generate a random description
  const generateDescription = (ipAddress, oldMac, newMac) =>
    `device ${ipAddress} changed mac from ${oldMac} to ${newMac}`;

  // Mock data for 10 rows
  const mockData = Array.from({ length: 10 }, () => {
    const ipAddress = generateRandomIp();
    const oldMac = generateRandomMac();
    const newMac = generateRandomMac();
    return {
      id: generateRandomId(),
      dateTime: `2024-11-${Math.floor(Math.random() * 30 + 1)} 14:${Math.floor(
        Math.random() * 60
      )}:00`,
      ipAddress,
      macAddress: newMac,
      satelliteName: `Satellite-${Math.floor(Math.random() * 10 + 1)}`,
      description: generateDescription(ipAddress, oldMac, newMac),
    };
  });

  return (
    <div>
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-12">
            <div className="table-responsive">
              <table className="table w-100 table-bordered table-hover rounded equal-columns">
                <thead className="bg-secondary text-white">
                  <tr>
                    <th className="sr-col">ID</th>
                    <th>Date Time</th>
                    <th>IP Address</th>
                    <th>Mac Address</th>
                    <th>Satellite Name</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  {mockData.map((row) => (
                    <tr key={row.id}>
                      <td>{row.id}</td>
                      <td>{row.dateTime}</td>
                      <td>{row.ipAddress}</td>
                      <td>{row.macAddress}</td>
                      <td>{row.satelliteName}</td>
                      <td>
                        <textarea
                          className="form-control h-70"
                          placeholder="Enter Reason"
                          maxLength={1500}
                          value={row.description}
                          disabled
                          readOnly
                        ></textarea>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiskFactorApproach;
