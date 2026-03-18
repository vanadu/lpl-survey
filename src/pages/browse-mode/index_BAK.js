export async function getServerSideProps() {
  return {
    redirect: {
      destination: '/browse-mode/Browse_00_Landing',
      permanent: false,
    },
  };
}

export default function BrowseIndex() {
  return null;
}