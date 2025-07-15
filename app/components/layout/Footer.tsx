interface FooterProps {
  darkMode: boolean;
}

export default function Footer({ darkMode }: FooterProps) {
  return (
    <footer className={`py-8 px-4 sm:px-6 lg:px-8 border-t ${
      darkMode ? 'border-gray-800' : 'border-gray-200'
    }`}>
      <div className="max-w-6xl mx-auto text-center">
        <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          © 2024 Matthew Raga.
        </p>
      </div>
    </footer>
  );
}