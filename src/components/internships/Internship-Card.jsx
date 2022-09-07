import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

const InternshipCard = (props) => {

  const login = localStorage.getItem("login")
  const navigate = useNavigate();

  const handleApply = () => {
      navigate(`/jobapplication?id=${props.srId}&type=${props.type}`)
  }

  return (
    <div className="min-h-min bg-gray-200 flex flex-col justify-between grow shrink basis-80 py-3 px-2 border border-gray-500 rounded-lg">
        <div>
            <div className="text-lg sm:text-xl font-semibold text-[#003979]">{props.position}</div>
            <div className="mt-1 text-[#003979]">{props.cmp}</div>
            <div className="mt-2 text-gray-600">{(props.responsibilities).substr(0, 120)}...</div>
        </div>
        <div className="mt-2 flex justify-between items-center">
            <div className="text-gray-600">
                <div><span className="font-bold text-black">{props.opn}</span>{" "}openings</div>
                <div><span className="font-bold text-black">{props.duration}</span>{" "}duration</div>
            </div>
            <div className='text-gray-600'>
                <button onClick={handleApply} className="px-3 py-2 border border-[#003979] hover:text-white rounded-md hover:bg-[#003979]">Details</button>
            </div>
        </div>
    </div>
  )
}

export default InternshipCard 


// ** old material ui

// const classes = useStyles();

// const useStyles = makeStyles((theme) => ({
//   InternCardContainer: {
//     [theme.breakpoints.between('xs', 770)]: {
//       display: 'flex',
//       justifyContent: 'center',
//       flexWrap: 'wrap'
//     }
//   },
//   internCard: {
//     width: '100%',
//     height: '200px',
//     backgroundColor: 'white',
//     borderRadius: '5px',
//     overflow: 'hidden',
//     boxShadow: '3px 3px 10px silver',
//     transition: '100ms All linear',
//     display: 'flex',
//     margin: '20px 0',
//     [theme.breakpoints.between('xs', 770)]: {
//       flexDirection: 'column',
//       maxWidth: '350px',
//       height: 'auto',
//     },
//     '&:hover': {
//       border: '1px solid #3F51B5',
//       boxShadow: '3px 3px 15px gray',
//       padding: 0
//     }
//   },
//   left: {
//     width: '30%',
//     height: '100%',
//     padding: '15px',
//     backgroundColor: theme.palette.primary.main,
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     [theme.breakpoints.between('xs', 770)]: {
//       width: '100%'
//     },
//   },
//   leftImg: {
//     maxHeight: '100%',
//     maxWidth: '100%',
//   },
//   right: {
//     width: '70%',
//     height: '100%',
//     backgroundColor: 'white',
//     padding: '15px',
//     fontWeight: 'light',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'space-between',
//     [theme.breakpoints.between('xs', 770)]: {
//       width: '100%'
//     },
//   },
//   rightBottom: {
//     position: 'relative',
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center'
//   },
//   applyBtn: {
//     '&:hover': {
//       backgroundColor: theme.palette.primary.main,
//       color: 'white'
//     }
//   },
//   headcontain: {
//     position: 'relative',
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'start',
//     [theme.breakpoints.between('xs', 770)]: {
//       flexDirection: 'column',

//     },

//   },
//   editbtn: {
//     position: 'relative',
//     display: 'flex',
//     justifyContent: 'space-between',
//     [theme.breakpoints.between('xs', 770)]: {
//       margin: '0'
//     },
//   },
//   btn: {
//     border: 'blue solid 1px',
//     '&:hover': {
//       backgroundColor: 'white',
//       border: 'blue solid 1px',
//       color: 'blue'
//     }
//   }
// }));

{/* <div>
      <Box className={classes.InternCardContainer}>
        <Box className={classes.internCard}>
          <Box className={classes.left}>
            <Box
              className={classes.leftImg}
              component={'img'}
              src="img/internship.png"
              alt="nhi mili bhai image"
            />
          </Box>
          <Box className={classes.right}>
            <Box>
              <Box className={classes.headcontain} >
                <Box>
                  <Typography variant='h4'>
                    <Box sx={{
                      fontWeight: '500',
                    }}>
                      {props.position}
                    </Box>
                  </Typography>
                  <Typography variant='h5'>
                    <Box sx={{
                      fontWeight: 'bold',
                    }}>
                      {props.cmp}
                    </Box>
                  </Typography>
                  <Typography variant='p'>
                    <Box sx={{
                      fontWeight: '200',
                      marginTop: '10px',
                      marginBottom: '10px',
                    }}>
                      {(props.responsibilities).substr(0, 100)}...
                    </Box>
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box className={classes.rightBottom}>
              <Box>
                <Box>
                  <Typography variant='p'>
                    <Box sx={{
                      fontWeight: 'regular',
                    }}>
                      <strong>{props.opn} </strong> openings<br/>
                      <strong>{props.duration} </strong> duration
                    </Box>
                  </Typography>
                </Box>
              </Box>
              <Box>
                <Button onClick={handleApply} className={classes.applyBtn} variant="outlined" color="primary">
                  Details
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box >
    </div > */}