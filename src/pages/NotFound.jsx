import MainLayout from "../components/layout/MainLayout";

function NotFound() {
  return (
    <MainLayout>
      <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
        <h1 className="text-5xl font-bold text-red-500">404</h1>
        <p className="mt-4 text-gray-600">
          The page you are looking for does not exist.
        </p>
      </div>
    </MainLayout>
  );
}

export default NotFound;
