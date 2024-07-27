import React from 'react';
import ReactDOM from 'react-dom';

 function Widget() {
    return (
        <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] flex flex-col items-center p-6">
            <nav className="w-full flex justify-between items-center py-4">
                <div className="text-red-500 font-bold">Portfolio</div>
                <ul className="flex space-x-6 text-white">
                    <li><a href="#home" className="hover:text-[var(--primary)]">Home</a></li>
                    <li><a href="#services" className="hover:text-[var(--primary)]">Services</a></li>
                    <li><a href="#about" className="hover:text-[var(--primary)]">About Me</a></li>
                    <li><a href="#portfolio" className="hover:text-[var(--primary)]">Portfolio</a></li>
                    <li><a href="#contact" className="hover:text-[var(--primary)]">Contact Me</a></li>
                </ul>
            </nav>
            <h2 className="text-4xl font-bold text-white my-8">
                <span className="text-[var(--foreground)]">VALUABLE</span> 
                <span className="text-purple-500">TESTIMONIALS</span>
            </h2>
            <div className="relative w-full max-w-2xl bg-[var(--card)] text-[var(--card-foreground)] p-8 rounded-lg shadow-lg">
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
                    <button id="prevBtn" className="text-white text-2xl">&lt;</button>
                </div>
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                    <button id="nextBtn" className="text-white text-2xl">&gt;</button>
                </div>
                <div className="flex flex-col items-center">
                    <img src="https://placehold.co/100x100" alt="Profile picture of Paul Njuguna" className="w-24 h-24 rounded-full border-4 border-blue-500 mb-4" />
                    <h3 className="text-xl font-semibold text-white">Paul Njuguna</h3>
                    <p className="text-center text-white mt-4">
                        Having worked with James I can confidently say that he is a disciplined and focused person when he has put his mind onto it and open to criticism.
                    </p>
                </div>
            </div>
        </div>
    );
}

// Render the Widget component to the DOM
render(<Widget />, document.getElementById('root'));
export default Widget;
