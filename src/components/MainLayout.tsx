import Header from "./Header";

// Main Layout Component
const MainLayout = ({ children }) => {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            {/* <Footer /> */}
        </>
    );
};
export default MainLayout