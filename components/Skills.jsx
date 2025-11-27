import DataMhs from "/src/assets/dataMahasiswa"
export default function Skills(){
    return (
        <>
        <div className="skills-card">
            <h2>Skills</h2>
            <div className="main-info">
                <ul className="skills-brick">
                {DataMhs.skills.map(skills =>(
                    <li key={skills.id} className="skills-item">
                        <img src={skills.icon_url} alt="react-js" width={37} />
                        <div className="info-skills">
                            <div className="skills-header">
                                <span className="skills-name">{skills.name}</span>
                                {skills.is_main && (
                                    <span className="skills-main">Main</span>
                                )}
                            </div>
                            {skills.years_of_experience && (
                                <span className="skills-exp">
                                {skills.years_of_experience} years experience
                            </span>
                            )}
                        </div>
                        {/* --- BAGIAN YANG DIPERBAIKI --- */}
                        <div className="skills-level">
                            {/* 1. Teks Level (Advanced, dll) di atas */}
                            <span>{skills.level}</span>

                            {/* 2. WADAH WRAPPER (Flex Row) */}
                            <div className="skills-bar-wrapper">
                                {/* Item Kiri: Bar Background & Fill */}
                                <div className="bar-background">
                                    <div className="bar-fill" style={{width: skills.percentage}}></div>
                                </div> {/* <-- Tutup div bar-background DI SINI */}

                                {/* Item Kanan: Teks Persentase */}
                                <span className="bar-text">{skills.percentage}</span>
                            </div>
                        </div>
                        {/* -------------------------------- */}
                    </li>
                ))}
            </ul>
            </div>
        </div>
        </>
    )
}