import "./Menu.css";
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

sessionStorage.getItem("page")
|| sessionStorage.setItem("page", "1");


function Menu(props) {

  const handleChange = (event, value) => {

    sessionStorage.setItem("page", value);
    props.switchPages(value);

    (function () {
      document.documentElement.scrollTop = 0;
    }())

  };

  return (
    <>
      <div className="ab_menu">
        <div className="ctn">
            <Stack spacing={2}>
              <Typography className="title">Page: {+sessionStorage.getItem("page")}</Typography>
              <Pagination count={500}
              page={+sessionStorage.getItem("page")}
              onChange={handleChange}
              color="primary"
              shape="rounded"
              siblingCount={0}
              />
            </Stack>
        </div>
      </div>
    </>
  )
}
export default Menu;