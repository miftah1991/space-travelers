const missionURL = 'https://api.spacexdata.com/v3/missions';

const getMissions = async () => {
  const response = await fetch(missionURL);
  const data = await response.json();
  return data;
};

export default getMissions;
