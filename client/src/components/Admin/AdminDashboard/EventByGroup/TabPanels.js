// TabPanels.js
import React, { useState } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import { Pagination } from "@mui/material";

import CustomTabPanel from "./CustomTabPanel";
import EmptyGroupData from "./EmptyGroupData";
import GroupData from "./GroupData";

export default function TabPanels({ value, groupLabels, demoData }) {
  const itemsPerPage = 5;
  const [page, setPage] = useState(1);

  const handlePageChange = (event, newPage) => setPage(newPage);

  const getGroupDataFor = (groupNumber) =>
    demoData.filter((data) => data.groupNumber === groupNumber);

  return (
    <>
      {groupLabels.map((group, index) => {
        const groupData = getGroupDataFor(group);
        const startIdx = (page - 1) * itemsPerPage;
        const paginatedData = groupData.slice(
          startIdx,
          startIdx + itemsPerPage
        );

        return (
          <CustomTabPanel key={index} value={value} index={index}>
            {paginatedData.length > 0 ? (
              paginatedData.map((data) => (
                <GroupData key={data.name} data={data} />
              ))
            ) : (
              <EmptyGroupData />
            )}
            {groupData.length > itemsPerPage && (
              <Box mt={1} display="flex" justifyContent="center">
                <Pagination
                  count={Math.ceil(groupData.length / itemsPerPage)}
                  page={page}
                  onChange={handlePageChange}
                />
              </Box>
            )}
          </CustomTabPanel>
        );
      })}
    </>
  );
}

TabPanels.propTypes = {
  value: PropTypes.number.isRequired,
  groupLabels: PropTypes.arrayOf(PropTypes.number).isRequired,
  demoData: PropTypes.arrayOf(
    PropTypes.shape({
      groupNumber: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
    })
  ).isRequired,
};
