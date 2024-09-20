// TableComponent.js
import React from "react";

const TableComponent = ({ formsFetched }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full min-w-[1000px]">
        <thead>
          <tr className="bg-[#E8F4FF]">
            <th className="px-10 py-2 border">Index</th>
            <th className="px-10 py-2 border">Serial No.</th>
            <th className="px-20 py-2 border">Name</th>
            <th className="px-8 py-2 border">Contact Number</th>
            <th className="px-20 py-2 border">Qualifications</th>
            <th className="px-20 py-2 border">Extra Qualifications</th>
            <th className="px-40 py-2 border">Experience</th>
            <th className="px-20 py-2 border">Role Responsibilities</th>
            <th className="px-10 py-2 border">Soft Skills</th>
            <th className="px-20 py-2 border">Technical Skills</th>
            <th className="px-10 py-2 border">Father's Name</th>
            <th className="px-10 py-2 border">Mother's Name</th>
            <th className="px-10 py-2 border">Date of Birth</th>
            <th className="px-8 py-2 border">Marital Status</th>
            <th className="px-40 py-2 border">Permanent Address</th>
            <th className="px-40 py-2 border">Profile</th>
            <th className="px-20 py-2 border">LinkedIn</th>
            <th className="px-10 py-2 border">Languages</th>
            <th className="px-10 py-2 border">Mistakes Count</th>
          </tr>
        </thead>
        <tbody>
          {formsFetched
            ?.slice()
            ?.reverse()
            ?.map((user, index) => (
              <tr key={index}>
                <td className="px-4 py-2 border">{index + 1}</td>
                <td className="px-4 py-2 border">
                  {user.serialNumber || "N/A"}
                </td>
                <td className="px-4 py-2 border">{user.name || "N/A"}</td>
                <td className="px-4 py-2 border">
                  {user.contactNumber || "N/A"}
                </td>
                <td className="px-4 py-2 border">
                  {Object.entries(user.qualificationDetails || {})?.map(
                    ([key, value]) => (
                      <div key={key}>
                        {key}: {value || "N/A"}
                      </div>
                    )
                  )}
                </td>
                <td className="px-4 py-2 border">
                  {Object?.entries(user.extraQualificationsDetails || {})?.map(
                    ([key, value]) => (
                      <div key={key}>
                        {key}: {value || "N/A"}
                      </div>
                    )
                  )}
                </td>
                <td className="px-4 py-2 border">
                  {(user.experience || []).filter((exp) => exp).join(", ") ||
                    "N/A"}
                </td>
                <td className="px-4 py-2 border">
                  {user.roleResponsibilities || "N/A"}
                </td>
                <td className="px-4 py-2 border">
                  {(user.softSkills || []).join(", ") || "N/A"}
                </td>
                <td className="px-4 py-2 border">
                  {(user.technicalSkills || []).join(", ") || "N/A"}
                </td>
                <td className="px-4 py-2 border">{user.fatherName || "N/A"}</td>
                <td className="px-4 py-2 border">{user.motherName || "N/A"}</td>
                <td className="px-4 py-2 border">
                  {user.dateOfBirth || "N/A"}
                </td>
                <td className="px-4 py-2 border">
                  {user.maritalStatus || "N/A"}
                </td>
                <td className="px-4 py-2 border">
                  {user.permanentAddress || "N/A"}
                </td>
                <td className="px-4 py-2 border">{user.profile || "N/A"}</td>
                <td className="px-4 py-2 border">{user.linkedIn || "N/A"}</td>
                <td className="px-4 py-2 border">
                  {(user.languages || []).join(", ") || "N/A"}
                </td>
                <td className="px-4 py-2 border">
                  {user.mistakesCount || "N/A"}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
