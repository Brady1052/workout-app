import React, { useContext, useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import {
  IconButton,
  Typography,
  Box,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import AddIcon from '@mui/icons-material/Add';
import WorkoutModal from '../Modals/NavModals/WorkoutModal';
import WorkoutsContext from '../../context/workouts-context';
import WorkoutCard from '../UI/Cards/WorkoutCard';

function DummyWorkouts() {
  const theme = useTheme();
  const ctx = useContext(WorkoutsContext);
  const [hasWorkouts, setHasWorkouts] = useState(false);
  const screenSmall = useMediaQuery(theme.breakpoints.down('sm'));
  useEffect(() => {
    if (ctx.workouts.length > 0) {
      setHasWorkouts(true);
    } else setHasWorkouts(false);
  }, [ctx.workouts.length]);

  return (
    <React.Fragment>
      <Typography
        variant="h3"
        style={{
          color: 'white',
          marginTop: '2rem',
          fontWeight: '600',
        }}
        sx={{
          textAlign: { xs: 'left', lg: 'center' },
          fontSize: { xs: '2.5rem', lg: '5rem' },
          marginLeft: { xs: '1rem' },
          marginBottom: { xs: '2rem', lg: '0' },
        }}
        color="white"
      >
        Start Workout
      </Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: { xs: 'row-reverse', lg: 'row' },
        }}
      >
        <Button
          variant="contained"
          color="bonus"
          startIcon={<AddIcon />}
          style={{ color: 'white' }}
          sx={{
            marginRight: '1rem',
            display: { lg: 'none' },
            marginBottom: '1rem',
          }}
          size="small"
          onClick={() => {
            ctx.setWorkoutOpen(true);
          }}
        >
          Template
        </Button>

        <WorkoutModal />

        <Typography
          variant="h6"
          style={{ color: 'white', fontWeight: '600' }}
          sx={{
            marginTop: { xs: '1.5rem', lg: '0' },
            marginLeft: { xs: '1rem', lg: '2rem' },
            marginBottom: { xs: '3rem', lg: '3rem' },
            fontSize: { lg: '3rem' },
          }}
        >
          My Templates
        </Typography>
      </Box>
      <div
        style={{
          marginTop: hasWorkouts ? '-9rem' : '0rem',
          display: screenSmall ? 'none' : 'block',
        }}
      >
        <Box>
          <WorkoutCard />
        </Box>
      </div>
      <div
        style={{
          marginTop: hasWorkouts ? '-5rem' : '0rem',
          display: screenSmall ? 'block' : 'none',
        }}
      >
        <Box>
          <WorkoutCard />
        </Box>
      </div>

      {/* <Typography
        variant="h6"
        style={{ color: 'white', fontWeight: '600' }}
        sx={{
          marginTop: { xs: '1.5rem', lg: '0' },
          marginLeft: { xs: '1rem', lg: '2rem' },
          marginBottom: { xs: '-1rem', lg: '0' },
          fontSize: { lg: '3rem' },
        }}
      >
        Example Templates
      </Typography> */}
      <Typography
        variant="h6"
        style={{ color: 'white', fontWeight: '600' }}
        sx={{
          marginTop: { xs: '1.5rem', lg: '2rem' },
          marginLeft: { xs: '1rem', lg: '2rem' },
          marginBottom: { xs: '-1rem', lg: '0' },

          fontSize: { lg: '3rem' },
        }}
      >
        Example Templates
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
          marginLeft: { lg: '6rem', xs: '1.6rem' },
        }}
      >
        <div className="container">
          <div className="row">
            <div className={`col-xs-12  col-sm-12 col-md-6 col-lg-4 col-xl-4`}>
              <div className="col">
                <div className="col ">
                  <Box
                    className="card"
                    sx={{
                      width: '18rem',
                      borderRadius: '25px',
                      marginTop: { xs: '3rem', lg: '2rem' },
                      marginLeft: { xs: '1rem', lg: '0' },
                      backgroundColor: '#0057C3',
                      border: '1px solid white',
                      color: 'white',
                      position: 'relative',
                    }}
                  >
                    <IconButton
                      style={{
                        position: 'absolute',
                        right: '0.5rem',
                        top: '0.5rem',
                      }}
                    >
                      <ClearIcon color="error" style={{ fontSize: '1.5rem' }} />
                    </IconButton>

                    <div className="card-body">
                      <div className="text-center">
                        <Typography
                          className="card-title"
                          variant="h3"
                          style={{
                            textAlign: 'center',
                            color: 'white',
                            fontWeight: '600',
                          }}
                        >
                          Leg Day
                        </Typography>

                        <ul
                          className={`list-group list-group-flush`}
                          style={{
                            marginTop: '0.5rem',
                            display: 'flex',
                            justifyContent: 'flex-start',
                          }}
                        >
                          <li
                            className="list-group-item"
                            style={{
                              backgroundColor: '#0057C3',
                              color: 'white',
                              display: 'flex',
                            }}
                          >
                            <span>5</span>
                            <span
                              style={{
                                marginLeft: '0.5rem',
                                marginRight: '0.5rem',
                              }}
                            >
                              <ClearIcon />
                            </span>
                            <span>8</span>
                            <ClearIcon />
                            225lbs
                            <span style={{ marginLeft: '0.5rem' }}>Squats</span>
                          </li>
                          <li
                            className="list-group-item"
                            style={{
                              backgroundColor: '#0057C3',
                              color: 'white',
                              display: 'flex',
                              alignItems: 'center',
                            }}
                          >
                            <span>4</span>
                            <span
                              style={{
                                marginLeft: '0.5rem',
                                marginRight: '0.5rem',
                              }}
                            >
                              <ClearIcon />
                            </span>
                            <span>12</span>
                            <ClearIcon />
                            450lbs
                            <span style={{ marginLeft: '0.5rem' }}>
                              Leg Press
                            </span>
                          </li>
                          <li
                            className="list-group-item"
                            style={{
                              backgroundColor: '#0057C3',
                              color: 'white',
                              display: 'flex',
                              alignItems: 'center',
                            }}
                          >
                            <span>4</span>
                            <span
                              style={{
                                marginLeft: '0.5rem',
                                marginRight: '0.5rem',
                              }}
                            >
                              <ClearIcon />
                            </span>
                            <span>12</span>
                            <ClearIcon />
                            315lbs
                            <span style={{ marginLeft: '0.5rem' }}>
                              Leg Extensions
                            </span>
                          </li>
                        </ul>
                      </div>
                      <Button
                        variant="contained"
                        style={{
                          maxWidth: '100%',
                          minWidth: '100%',
                          fontWeight: '600',
                          color: 'white',
                          border: '1px solid black',
                        }}
                        color="success"
                      >
                        Start Workout
                      </Button>
                    </div>
                  </Box>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className={`col-xs-12  col-sm-12 col-md-6 col-lg-4 col-xl-4`}>
              <div className="col">
                <div className="col ">
                  <Box
                    className="card"
                    sx={{
                      width: '18rem',
                      borderRadius: '25px',
                      marginTop: { xs: '3rem', lg: '2rem' },
                      marginLeft: { xs: '1rem', lg: '0' },
                      backgroundColor: '#0057C3',
                      border: '1px solid white',
                      color: 'white',
                      position: 'relative',
                    }}
                  >
                    <IconButton
                      style={{
                        position: 'absolute',
                        right: '0.5rem',
                        top: '0.5rem',
                      }}
                    >
                      <ClearIcon color="error" style={{ fontSize: '1.5rem' }} />
                    </IconButton>

                    <div className="card-body">
                      <div className="text-center">
                        <Typography
                          className="card-title"
                          variant="h3"
                          style={{
                            textAlign: 'center',
                            color: 'white',
                            fontWeight: '600',
                          }}
                        >
                          Chest
                        </Typography>

                        <ul
                          className={`list-group list-group-flush`}
                          style={{
                            marginTop: '0.5rem',
                            display: 'flex',
                            justifyContent: 'flex-start',
                          }}
                        >
                          <li
                            className="list-group-item"
                            style={{
                              backgroundColor: '#0057C3',
                              color: 'white',
                              display: 'flex',
                              alignItems: 'center',
                            }}
                          >
                            <span>4</span>
                            <span
                              style={{
                                marginLeft: '0.5rem',
                                marginRight: '0.5rem',
                              }}
                            >
                              <ClearIcon />
                            </span>
                            <span>10</span>
                            <ClearIcon />
                            135lbs
                            <span style={{ marginLeft: '0.5rem' }}>
                              Bench Press
                            </span>
                          </li>
                          <li
                            className="list-group-item"
                            style={{
                              backgroundColor: '#0057C3',
                              color: 'white',
                              display: 'flex',
                              alignItems: 'center',
                            }}
                          >
                            <span>3</span>
                            <span
                              style={{
                                marginLeft: '0.5rem',
                                marginRight: '0.5rem',
                              }}
                            >
                              <ClearIcon />
                            </span>
                            <span>8</span>
                            <ClearIcon />
                            50lbs
                            <span style={{ marginLeft: '0.5rem' }}>
                              Incline DB Press
                            </span>
                          </li>
                          <li
                            className="list-group-item"
                            style={{
                              backgroundColor: '#0057C3',
                              color: 'white',
                              display: 'flex',
                              alignItems: 'center',
                            }}
                          >
                            <span>5</span>
                            <span
                              style={{
                                marginLeft: '0.5rem',
                                marginRight: '0.5rem',
                              }}
                            >
                              <ClearIcon />
                            </span>
                            <span>8</span>
                            <ClearIcon />
                            60lbs
                            <span style={{ marginLeft: '0.5rem' }}>
                              Tricep Extensions
                            </span>
                          </li>
                        </ul>
                      </div>
                      <Button
                        variant="contained"
                        style={{
                          maxWidth: '100%',
                          minWidth: '100%',
                          fontWeight: '600',
                          color: 'white',
                          border: '1px solid black',
                        }}
                        color="success"
                      >
                        Start Workout
                      </Button>
                    </div>
                  </Box>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className={`col-xs-12  col-sm-12 col-md-6 col-lg-4 col-xl-4`}>
              <div className="col">
                <div className="col ">
                  <Box
                    className="card"
                    sx={{
                      width: '18rem',
                      borderRadius: '25px',
                      marginTop: { xs: '3rem', lg: '2rem' },
                      marginLeft: { xs: '1rem', lg: '0' },
                      backgroundColor: '#0057C3',
                      border: '1px solid white',
                      color: 'white',
                      position: 'relative',
                    }}
                  >
                    <IconButton
                      style={{
                        position: 'absolute',
                        right: '0.5rem',
                        top: '0.5rem',
                      }}
                    >
                      <ClearIcon color="error" style={{ fontSize: '1.5rem' }} />
                    </IconButton>

                    <div className="card-body">
                      <div className="text-center">
                        <Typography
                          className="card-title"
                          variant="h3"
                          style={{
                            textAlign: 'center',
                            color: 'white',
                            fontWeight: '600',
                          }}
                        >
                          Back
                        </Typography>

                        <ul
                          className={`list-group list-group-flush`}
                          style={{
                            marginTop: '0.5rem',
                            display: 'flex',
                            justifyContent: 'flex-start',
                          }}
                        >
                          <li
                            className="list-group-item"
                            style={{
                              backgroundColor: '#0057C3',
                              color: 'white',
                              display: 'flex',
                            }}
                          >
                            <span>4</span>
                            <span
                              style={{
                                marginLeft: '0.5rem',
                                marginRight: '0.5rem',
                              }}
                            >
                              <ClearIcon />
                            </span>
                            <span>8</span>
                            <ClearIcon />
                            315lbs
                            <span style={{ marginLeft: '0.5rem' }}>
                              Deadlift
                            </span>
                          </li>
                          <li
                            className="list-group-item"
                            style={{
                              backgroundColor: '#0057C3',
                              color: 'white',
                              display: 'flex',
                            }}
                          >
                            <span>4</span>
                            <span
                              style={{
                                marginLeft: '0.5rem',
                                marginRight: '0.5rem',
                              }}
                            >
                              <ClearIcon />
                            </span>
                            <span>12</span>
                            <ClearIcon />
                            70lbs
                            <span style={{ marginLeft: '0.5rem' }}>
                              DB Rows
                            </span>
                          </li>
                          <li
                            className="list-group-item"
                            style={{
                              backgroundColor: '#0057C3',
                              color: 'white',
                              display: 'flex',
                            }}
                          >
                            <span>4</span>
                            <span
                              style={{
                                marginLeft: '0.5rem',
                                marginRight: '0.5rem',
                              }}
                            >
                              <ClearIcon />
                            </span>
                            <span>8</span>
                            <ClearIcon />
                            180lbs
                            <span style={{ marginLeft: '0.5rem' }}>
                              Pullups
                            </span>
                          </li>
                        </ul>
                      </div>
                      <Button
                        variant="contained"
                        style={{
                          maxWidth: '100%',
                          minWidth: '100%',
                          fontWeight: '600',
                          color: 'white',
                          border: '1px solid black',
                        }}
                        color="success"
                      >
                        Start Workout
                      </Button>
                    </div>
                  </Box>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </React.Fragment>
  );
}

export default DummyWorkouts;
