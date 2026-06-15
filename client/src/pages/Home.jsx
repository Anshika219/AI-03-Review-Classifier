import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <Card
        title="Sentiment Analysis"
        description="Classify reviews as Positive, Neutral or Negative."
      />

      <Card
        title="Theme Detection"
        description="Detect Food, Host, Location and more."
      />

      <Card
        title="AI Response Generation"
        description="Generate automatic management responses."
      />

      <Footer />
    </>
  );
}

export default Home;