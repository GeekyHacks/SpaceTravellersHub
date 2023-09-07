import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMissions } from '../Redux/Missions/MissionSlice';
import '../css/myProfile.css';

const MyProfile = () => {
  const missions = useSelector((state) => state.missions.missions); // Use "missions" directly
  const reservedMissions = missions.filter((mission) => mission.reserved === true);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);
  const { rockets } = useSelector((state) => state.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved === true);
  const { dragons } = useSelector((state) => state.dragons);
  const reservedDragons = dragons.filter((dragon) => dragon.reserved === true);
  let rocketList;
  let dragonList;

  if (reservedRockets.length > 0) {
    rocketList = (
      <ul className="rockets-list">
        {reservedRockets.map((rocket) => (
          <li key={rocket.id}>{rocket.name}</li>
        ))}
      </ul>
    );
  } else {
    rocketList = <p className="empty-profile-msg">You have not reserved any Rockets yet</p>;
  }
  if (reservedDragons.length > 0) {
    dragonList = (
      <ul className="dragons-list">
        {reservedDragons.map((dragon) => (
          <li key={dragon.id}>{dragon.name}</li>
        ))}
      </ul>
    );
  } else {
    dragonList = <p className="empty-profile-msg">You have not reserved any Dragons yet</p>;
  }
  return (
    <div className="my-profile">
      <div className="my-missions">
        <h2 className="myprofile-header">My Missions</h2>
        <ul className="myprofile-list">
          {reservedMissions.map((Mission) => (
            <li key={Mission.id}>{Mission.mission_name}</li>
          ))}
        </ul>
      </div>
      <div className="my-rockets">
        <p className="rockets-headline">My Rockets</p>
        {rocketList}
      </div>
      <div className="my-dragons">
        <p className="dragons-headline">My Dragons</p>
        {dragonList}
      </div>
    </div>
  );
};
export default MyProfile;
