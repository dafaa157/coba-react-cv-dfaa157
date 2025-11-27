import DataMhs from "/src/assets/dataMahasiswa"
export default function Profile(){
    return (
        <>
            <div className="profile-card">
                <img src={DataMhs.profile.photo_link} alt="foto-1"  />
                <div className="info-mhs">
                <h1>{DataMhs.profile.full_name}</h1>
                <p>{DataMhs.profile.headline}</p>
                    <ul className="badge-mhs">
                        <li>{DataMhs.profile.nim}</li>
                        <li>{DataMhs.profile.prodi}</li>
                        <li>Angkatan {DataMhs.profile.angkatan}</li>
                    </ul>
                        <ul className="icon-dunno">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-map-pin">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                </svg>
                                 <span>{DataMhs.profile.location}</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-eye">
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                    <circle cx="12" cy="12" r="3"></circle>
                                </svg>
                                 <span>{DataMhs.statistics.views_count} Views</span>
                            </li>
                        </ul>
                <p>{DataMhs.profile.short_bio}</p>
                <a href={DataMhs.profile.portfolio_url} target="_blank" className="btn-portfolio">Visit Here</a>
                </div>
            </div>
        </>
    )
}