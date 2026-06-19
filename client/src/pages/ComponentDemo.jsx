import { useState } from "react";

import {
  Button,
  Input,
  Modal,
  Toast,
  Loader,
} from "../components/ui";

const ComponentDemo = () => {
  const [text, setText] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setShowToast(true);

      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    }, 2000);
  };

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">
        ReviewSense Component Library Demo
      </h1>

      <div className="space-y-6 bg-white p-6 rounded-xl shadow">

        <Input
          placeholder="Enter review..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <div className="flex gap-4">
          <Button onClick={handleAnalyze}>
            Analyze Review
          </Button>

          <Button
            className="bg-purple-600 hover:bg-purple-700"
            onClick={() => setShowModal(true)}
          >
            Open Modal
          </Button>
        </div>

        {loading && <Loader />}
      </div>

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      >
        <h2 className="text-xl font-bold">
          Review Analysis
        </h2>

        <p className="mt-2">
          This is a sample modal component.
        </p>
      </Modal>

      {showToast && (
        <Toast message="Review analyzed successfully!" />
      )}
    </div>
  );
};

export default ComponentDemo;