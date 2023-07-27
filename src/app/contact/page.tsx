const ContactPage = async () => {
  function getData() {
    return new Promise<void>((resolve, reject) =>
      setTimeout(() => reject(), 2000)
    );
  }

  await getData();

  return <div>contact page</div>;
};

export default ContactPage;
