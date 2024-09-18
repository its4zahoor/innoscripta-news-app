import Modal from "./Modal";
import { SOURCES, CATEGORIES } from "../constants";
import useNewsContext from "../hooks/useNewsContext";

const OptionButton = ({ label, value, isSelected, onClick }) => {
  let style = "bg-gray-300 text-black opacity-50";
  if (isSelected) style = "bg-green-400 text-white font-semibold";

  return (
    <button
      key={value}
      onClick={onClick}
      className={`px-4 py-2 rounded-lg text-sm flex items-center justify-between ${style}`}
    >
      {label}
    </button>
  );
};

const RenderOptions = ({ options = [], selected = [], toggle }) =>
  options.map((option) => (
    <OptionButton
      key={option.value}
      label={option.label}
      value={option.value}
      isSelected={selected.includes(option.value)}
      onClick={() => toggle(option.value)}
    />
  ));

const Preferences = ({ isOpen, onClose }) => {
  const { preferences, updatePreferences, resetPreferences } = useNewsContext();
  const { categories, sources } = preferences;

  const togglePreferences = (type) => (value) => {
    const current = preferences[type];
    if (current.includes(value)) {
      const updated = current.filter((item) => item !== value);
      updatePreferences(type, updated);
    } else {
      const updated = [...current, value];
      updatePreferences(type, updated);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="w-full min-h-[400px]">
        <h2 className="text-xl font-semibold mb-4">Personalization</h2>
        <h3 className="text-sm text-gray-500 font-italic font-medium mb-4">
          Your preferences help us to serve you better. You can select your
          favorite categories and sources. <br />
          You can reset your preferences anytime.
        </h3>
        <div className="flex flex-col gap-4">
          <div>
            <h3 className="text-lg mb-1 font-medium">Categories</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              <RenderOptions
                options={CATEGORIES}
                selected={categories}
                toggle={togglePreferences("categories")}
              />
            </div>
          </div>
          <div>
            <h3 className="text-lg mb-1 font-medium">Sources</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              <RenderOptions
                options={SOURCES}
                selected={sources}
                toggle={togglePreferences("sources")}
              />
            </div>
          </div>
          <button
            onClick={resetPreferences}
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition duration-300"
          >
            Reset Preferences
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default Preferences;
