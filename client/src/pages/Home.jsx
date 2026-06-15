import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <div className="grid md:grid-cols-3 gap-6 p-8">
        <Card
          title="Sentiment Analysis"
          description="Classify reviews as Positive, Neutral or Negative."
        />

        <Card
          title="Theme Detection"
          description="Detect Food, Host, Location and Cleanliness."
        />

        <Card
          title="AI Response"
          description="Generate automatic management responses."
        />
      </div>

      <Footer />
    </>
  );
}

export default Home;