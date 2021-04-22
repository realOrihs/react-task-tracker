const AddRoadmap = (props) => (
  <div className="button">
    <button
      onClick={() => {
        let newRoadmap = { id: 6, name: 'Roadmap6', date: 'data', creator: 'creator', type_of_access: 'redact'};
        props.setRoadmapsList([...props.roadmapsList, newRoadmap])
      }}
      type="submit"
    >
      Add a Roadmap
    </button>
  </div>
);

export default AddRoadmap;
