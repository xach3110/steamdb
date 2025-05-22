import { useState, useMemo } from 'react';
import './PatchNotesTable.css';
// Multiline raw data copied from the provided table (tab-separated columns)
const rawData = `
Thu 15:23	Tiny Garden	Tiny Garden V1.1.2 Patch Notes
Thu 15:22	Workers & Resources: Soviet Republic	New version 1.1.0.7
Thu 15:14	Tales Of The Nightmares: Temporada 1	Patch 0.8
Thu 15:00	Kingdom Come: Deliverance II	Hotfix 1.3.1 is live with key fixes
Thu 15:02	Hostile Lands	Early Access Release!!
Thu 15:01	The Roottrees are Dead	Update Notes for May 22, 2025
Thu 15:01	Eternal Strands	[PATCH NOTES] Version 1.0.13.9394
Thu 14:56	MIRO	MIRO - 1.0.14
Thu 15:01	Bloodshed	🔥 Happy Slay Day: Bloodshed left Early Access for Full Launch!
Thu 14:54	Roman Triumph: Survival City Builder	🏛️ Update 0.2.0 - Imperial Ledger, Olive Oil & Wine!
Thu 15:06	魔力构造	The multiplayer feature of "Magic Construction" is now live!
Thu 14:50	Heroes of Valor Playtest	Version 0.1.2.565
Thu 14:46	Spell Fragments : Forbidden Magic Edition	【Update】Spell Fragments | Alpha 0.1.47
Thu 14:47	Horst - Der Ultimatives Rollenspiel	1.43.1 - Heiße Reparaturen
Thu 14:44	Primeval	Patch 1.3.1 (Edible Plant Names)
Thu 15:05	Sunrise's Order	Anniversary Update 1.3.0
Thu 14:16	Windward Horizon	Windward Horizon is out NOW!
Thu 14:38	Psycho Pigs	Patch 1.1 – Interface Improvements & World Selection Update
Thu 14:36	Sentinel Agency	Small update for you
Thu 14:33	DragonLoop: Prologue	250522
Thu 14:31	Because The World Died	Patch 1.25 - Car Repair And Clean Water
Thu 14:34	Zoo Time	Additional Features for Steam Remote Play
Thu 14:27	Motion Soccer	Update 1.1.23 – 5 New Story Mode Levels
Thu 14:32	Idle Cultivation	Bug Fixes and another Mystic Dungeon
Thu 14:00	Hellbreach: Vegas	Hellbreach: Vegas - Build ‘1.0.5.' Patch Notes
Thu 14:19	Constantine Scores	Constantine Scores Update 1.8
Thu 14:18	The Bus	The Bus Update 3.1 - Beta
Thu 14:14	Kalnazar	Fix 1.1.0113
Thu 14:19	Washout	Achievements fixed
Thu 14:19	Age of Reforging:The Freelands	Age of Reforging v1.02d Online Hotfix Patch
Thu 14:22	Modulus: Playtest	Patch Notes - Version 0.4.1
Thu 14:25	Broventure: The Wild Co-op	Hotfix 1.4
Thu 14:06	WeNeedNoKings	Evil Air Thievery and UI improvements
Thu 14:02	Frame Machina - OcularZero	Version 0.4.4
Thu 14:01	Brothel of Darkness	1.2 Patch note
Thu 15:01	packet.Breach()	packet.Breach() 1.0, Released!
Thu 14:00	Dwarves: Glory, Death and Loot Playtest	Update v1.19.18
Thu 13:59	Tales Of The Nightmares: Temporada 1	Mini Patch 0.7
Thu 13:59	HAINYA WORLD	20250522-HotFix
Thu 14:00	Hellbreach: Vegas	Dead Heat: Two New Maps and Updated Visuals!
Thu 14:08	The Rogue Prince of Persia	Update 0.14.3 - 05/22/2025 (#75cc17c4)
Thu 13:53	PropHunter	Science Update 0.7.8
Thu 14:02	LOK Digital	1.1.2
Thu 13:52	Roots of Tomorrow	May's Hotfix
Thu 13:44	Beautiful Girl	One Dev, One Game, One Dream
Thu 14:55	Tales of Seikyu	Tales of Seikyu - 0.2.15 Patch Notes
Thu 13:37	Forever World Cup Simulator	Gold Cup Qualifying Stages Updated
Thu 14:03	Flotsam	0.9.0f7 ready for testing
Thu 13:36	Cash Cleaner Simulator	🛠️Hotfix Update
Thu 13:24	Gunner, HEAT, PC!	GHPC Update 20250522
Thu 13:30	Schedule I	v0.3.6 Open Beta
Thu 13:22	SHARP FISTS	Patch for fixing Russian language errors And add monsters
Thu 13:15	Gobutiko Playtest	Hotfix Version 0.1.2
Thu 13:02	世外桃源 Land Of Idyllic Beauty	1.2.7.3
Thu 13:01	Wreckfest 2	Content Update #1 Patch #2
Thu 14:00	Grindstone	Cosmic Grind Update — A new Daily Grind mode!
Thu 13:01	Out of Sight	Out of Sight is out now! Watch the Launch Trailer!
Thu 13:07	Risk & Riches	5 New Cards, 5 New Pieces of Equipment, and 5 New Events
Thu 13:05	Going Medieval	Experimental Branch Patch (0.24.12)
Thu 12:59	Cross Blitz	CROSS BLITZ [BETA BRANCH] UPDATE 0.15.1
Thu 12:57	Rock and Scroll Playtest	Level 4 update
Thu 13:04	Demeo Battles	Friends List Update
Thu 12:15	Blood Bar Tycoon	Through zoom and shadows
Thu 12:40	Draw & Guess	Update Notes May 22nd
Thu 12:39	Travellers Rest	Pet Party - Update 0.7.1.0
Thu 12:32	Tales Of The Nightmares: Temporada 1	Mini Patch 0.6
Thu 12:37	Trident's Tale	Trident's Tale - OUT NOW ! On Board Pirates
Thu 12:31	五行乱斗 Playtest	v0.4.9
Thu 12:32	Haunted Property	Ending Update
Thu 12:14	Mad Miner	V1.4.5 "New UI" Update!
Thu 12:26	Project Werewulf	Patch notes
Thu 12:15	Town Girls	Town Girls 0.5.3.2
Thu 12:14	Mad Miner	V1.4.5 "New UI" Update!
Thu 12:15	SORRY SURVIVOR	多数のバグを修正いたしました。
Thu 12:13	Tales Of The Nightmares: Temporada 1	Patch 0.5
Thu 12:12	愉快でくだらないゲーム	ver 1.4.0
Thu 12:12	刷啊刷	0522补丁
Thu 12:10	Marvel's Spider-Man 2	Marvel's Spider-Man 2 PC – Patch 10 Release Notes
Thu 12:22	Master of Pieces © Jigsaw Puzzle	Pixel Dreams
Thu 12:07	Horst - Der Ultimatives Rollenspiel	1.43 - Magierturm am Eigenheim
Thu 12:13	Wrestling Empire	All Gas, No Brakes
Thu 12:01	Space Engineers 2	Space Engineers 2 Weekly Release: Hydrogen Thrusters, Armor Half Slope Inverted
Thu 12:05	Gray Zone Warfare	Upgraded Editions for Gray Zone Warfare: Winds of War
Thu 11:56	Frontline Protocol Playtest	Hotfix!
Thu 12:05	The Last Guild	Improvement - May 22, 2025
Thu 11:46	Wild Assault	Wild Assault Early Access May 22 Hotfix Patch Note
Thu 11:43	Check Inn	Big update 0.5 - new luxury hotel and level in Los Angeles!
Thu 11:41	Project Warlock	1.1.0.20 Hotfix
Thu 11:38	MyDockFinder	1.10.9.2 Emergency fix release
Thu 11:33	Day Of Reborns Playtest	Reborns Update
Thu 11:36	Tales Of The Nightmares: Temporada 1	Patch Notes 0.3
Thu 11:35	Toey Weedz Smoke One	V.1.421
Thu 11:29	Rune Coliseum	Patch Version: EAV3.4_0522#1837
Thu 12:03	汉尘：腐草为萤	"Han Chen" May 22nd (Version: 0.508)
Thu 11:22	光域	Minor repair on May 22nd
Thu 11:23	Edge Islands	Development Branch Update v0.503
Thu 11:24	Multi Turret Academy	0.9.17 Beta content has gone live!
Thu 11:48	Better Mart	Notes de mise à jour - v0.1.6C
Thu 11:32	Riot Control Simulator: Rookie Day	Quick Fixes #3
Wed 20:10	Sodaman	Early Access Update 6
Thu 11:07	DeerHunterFan.com TV - The Season	Turkey Trophy Pose (Hero Shot). Patch
Thu 11:41	深空七号 Deep Space 7	Game Version 0.4.7 Update Notes
Thu 11:02	Mini Racer Car Shop Simulator	v1.0.2-2025.21.4.2 - Store Expansion & Outdoor Furniture Update
Thu 11:03	Sephiria	0.7.36 Update
Thu 11:04	SEDAP! A Culinary Adventure	SEDAP! A Culinary Adventure is now available on Steam!
Thu 11:03	House of Legacy	Patch Notes V0.7.29
Thu 10:58	Arcane Rush	v1.5.5
Thu 11:00	SubwaySim 2	Subway Sim 2 | Update 3 | Out now!
Thu 10:55	Claritas - Dungeon Crawler RPG	1.6.1
Thu 10:44	Ketz: Galactic Overlords	Version 0.0.5 Patch Notes
Thu 10:40	下一站江湖Ⅱ	《下一站江湖Ⅱ》正式版第120次更新公告（已完成）
Thu 10:20	A Tower's Will	Patch 1.25
Thu 10:44	Plague Inc: Evolved	The 2025 World Update - Out Now!
Thu 10:18	half-a-cado	Hotfix 1.0.1.1
Thu 10:14	Two Point Museum	Hotfix - 2.0.183395
Thu 10:05	Wallpaper Play	V1.1.5
Thu 10:06	THE FINALS	Season 6: Heavy Hitters!
Thu 10:02	Song Of The Prairie	Song of The Prairie 1.3.02 Patch
Thu 09:51	Take Care Playtest	Playtest Patch 22.05.
Thu 09:52	Only Pinball	Bugfixes and more
Thu 09:43	Spell Fragments : Forbidden Magic Edition	【Update】Spell Fragments | Alpha 0.1.46
Thu 09:38	Warhammer: Chaos & Conquest	Game Update 4.8
Thu 09:35	Adrenalinkick	Content & Fix Update
Thu 09:24	皇帝麻将	5月22日更新
Thu 09:56	Infinity Islets	Update 0.8: Creative Showcase 2
Thu 09:30	Mortal Vessel	Update Version 1.5
Thu 09:21	异世界的城主大人	Update Announcement
Thu 09:19	AFL 26	Patch 22nd May
Thu 09:19	Cat God Ranch	v1.0.4.4
Thu 09:19	Cozy Together	Farming and stuff
Thu 09:16	Pastor's Lake: The Game	small update 22.05.2025
Thu 09:39	闪光公仔	New game trial version coming soon
Thu 09:59	Fur and Void	The game has launched in early access!
Thu 09:07	Wartales	Patch Notes v1.0.41402
Thu 09:02	Tokyo Xtreme Racer	Update Ver.0.12.0
Thu 09:04	The Planet Crafter	Development Branch update - v1.520
Thu 08:58	The Wandering Village	Patchnotes v0.11.7
Thu 08:56	Nonograms	10 new DLC's is available!
Thu 08:55	TaleSpire	Slab positioning fix leaves Beta
Thu 08:46	Core Keeper	1.1.2.1 Post-Update Stability Patch
Thu 08:40	Burden of the Blue	Version 1.0.1 - Small fixes and adjustments
Thu 08:40	Cuccchi	The New Update Is Here – And It’s FREE!
Thu 10:10	Morkull Ragast's Rage	Morkull Ragast’s Rage - Update 1.0.7 & A Message from the God of Darkness
Thu 08:55	Yi Xian: The Cultivation Card Game	May 22 Hotfix
Thu 08:54	half-a-cado	Hotfix 1.0.1
Thu 08:17	Shiftall VR Manager	1.2.7 Beta
Thu 08:20	Her Place VR	Update Notes (May 22, 2025)
Thu 08:10	Rotten Sails Playtest	Patch notes - Fix and improvements
Thu 09:00	Arma Reforger	Update 1.4
Thu 08:14	ENDLESS™ Dungeon	We Are Removing Denuvo
`;

// Parse raw data into structured objects
const patchNotes = rawData
  .split('\n')
  .filter(line => line.trim() && !line.startsWith('Date'))
  .map(line => {
    const [date, game, title] = line.split('\t');
    return { date: date.trim(), game: game.trim(), title: title.trim() };
  });

export default function PatchNotesTable() {
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    const term = search.toLowerCase();
    return patchNotes.filter(({ date, game, title }) =>
      `${date} ${game} ${title}`.toLowerCase().includes(term)
    );
  }, [search]);

 return (
    <div className="patchnotes-container">
      <input
        type="text"
        placeholder="Search all patch notes..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="patchnotes-search"
      />
      <div className="patchnotes-table-wrap">
        <table className="patchnotes-table">
          <thead>
            <tr>
              <th className="patchnotes-th">Date</th>
              <th className="patchnotes-th">Game</th>
              <th className="patchnotes-th">Patch Title</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((note, idx) => (
              <tr key={idx} className="patchnotes-row">
                <td className="patchnotes-td">{note.date}</td>
                <td className="patchnotes-td game">{note.game}</td>
                <td className="patchnotes-td patchnotes-link">{note.title}</td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={3} className="patchnotes-no-results">
                  Nothing found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
