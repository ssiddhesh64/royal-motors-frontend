import { Link } from 'react-router-dom';
import {
    FaCheckCircle,
    FaGraduationCap,
    FaHandshake,
    FaFileAlt,
} from 'react-icons/fa';
import { whatsappUrl } from '../constants/contact';

const features = [
    {
        icon: FaGraduationCap,
        title: 'Car and Two-Wheeler Training',
        desc: 'Explore practical lessons for the vehicle type you want to learn.',
        color: 'text-blue-600',
        bg: 'bg-blue-50',
    },
    {
        icon: FaHandshake,
        title: 'A Clear Learning Process',
        desc: 'See the steps from your first enquiry through practice and test preparation.',
        color: 'text-emerald-600',
        bg: 'bg-emerald-50',
    },
    {
        icon: FaFileAlt,
        title: 'Licence Process Guidance',
        desc: 'Find information about documents, learner’s licences, and RTO test preparation.',
        color: 'text-violet-600',
        bg: 'bg-violet-50',
    },
];

const highlights = [
    'Car driving lessons',
    'Two-wheeler lessons',
    'Learner’s licence guidance',
    'RTO test preparation',
    'Document checklist',
    'Online theory mock test',
    'Enquiry by phone',
    'Enquiry by WhatsApp',
];

function Middle() {
    return (
        <section
            className="px-6 md:px-10 pt-4 pb-2 mt-4 md:pt-10 md:pb-10 bg-gray-50"
            aria-labelledby="why-heading"
        >
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="text-center mb-10">
                    <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-800">
                        Training and support
                    </p>
                    <h2
                        id="why-heading"
                        className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
                    >
                        A clear path to driving practice
                    </h2>
                </div>

                {/* Feature Grid */}
                <div className="grid md:grid-cols-3 gap-6 mb-10">
                    {features.map((f) => (
                        <div
                            key={f.title}
                            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                        >
                            <div
                                className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${f.bg} ${f.color} text-xl mb-4`}
                            >
                                <f.icon />
                            </div>
                            <h3 className="text-lg font-bold text-gray-800 mb-4">
                                {f.title}
                            </h3>
                            <p className="w-fit text-gray-500 text-sm">{f.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Highlights */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                    {highlights.map((h) => (
                        <div
                            key={h}
                            className="flex items-center gap-2.5 bg-white rounded-xl px-4 py-3 shadow-sm border border-gray-100"
                        >
                            <FaCheckCircle className="text-green-500 text-sm flex-shrink-0" />
                            <span className="text-gray-700 text-sm font-medium">{h}</span>
                        </div>
                    ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-col justify-evenly sm:flex-row">
                    <Link
                        to="/services"
                        className="w-full mr-8 text-center bg-blue-500 text-white px-8 py-3 rounded-xl hover:bg-blue-700 hover:scale-[1.02] transition-all duration-300 shadow-md font-semibold"
                    >
                        View Services
                    </Link>
                    <a
                        href={whatsappUrl('Hi, I would like to enquire about driving lessons.')}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 w-full rounded-xl bg-green-700 px-8 py-3 text-center font-semibold text-white shadow-md transition-all duration-300 hover:bg-green-800 sm:mt-0"
                    >
                        Chat on WhatsApp
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Middle;
