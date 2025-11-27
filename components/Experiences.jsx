import DataMhs from "/src/assets/dataMahasiswa"

export default function Experience(){

    const formatDate = (dateString) => {
        if (!dateString) return "";
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
    };

    return (
        <>
        <div className="experience-card">
            <h2>Experience</h2>
            
            <div className="timeline-wrapper">
                {DataMhs.experiences.map((exp, index) => (
                    <div key={exp.id} className="timeline-item">
                        
                        <div className="timeline-left">
                            <div className={"timeline-icon-wrapper ${index === 0 ? 'active' : ''}"}>
                                <img src={exp.image_url} alt="logo" />
                            </div>
                            
                            {index !== DataMhs.experiences.length - 1 && (
                                <div className="timeline-line"></div>
                            )}
                        </div>

                        <div className="timeline-content">
                            
                            <div className="exp-header">
                                <h3 className="exp-role">{exp.title}</h3>
                                
                                <span className={"exp-type-badge ${exp.experience_type}"}>
                                    {exp.experience_type}
                                </span>
                            </div>

                            <div className="exp-company">
                                {exp.organization}
                            </div>

                            <div className="exp-meta">
                                <span className="exp-date">
                                    📅 {formatDate(exp.start_date)} - {exp.is_current ? "Present" : formatDate(exp.end_date)}
                                </span>
                                {exp.is_current && (
                                    <span className="status-current">Current</span>
                                )}
                            </div>

                            <p className="exp-desc">
                                {exp.description}
                            </p>

                             {exp.technologies && (
                                <div className="exp-tags-wrapper">
                                    {exp.technologies.map((tech, i) => (
                                        <span key={i} className="exp-tag">{tech}</span>
                                    ))}
                                </div>
                            )}

                        </div>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}