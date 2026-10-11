[The page](https://x07x08.github.io/nfsmw-save-editor/src)

A web save editor for Need for Speed : Most Wanted 2005.

Tested on the 1.3 English version (6,029,312 bytes). Also supports PS2 and Xbox 360 save files.

Xbox 360 saves (`MC02` magic, 62,688 bytes) are detected automatically. They use the PC layout with
big-endian values and the same MD5 range; from the car stable on, every field is 8 bytes further than
on the PC, and a pursuit record stores its bounty before its length. Tested with a PAL save from the
[nfsmw-nx](https://github.com/StevensND/nfsmw-nx) Nintendo Switch port of the Xbox 360 version.

The Xbox 360 game also checks three EA CRC32s in the header (big-endian, at 0x10, 0x14 and 0x18,
over [0x1C, 0x24), [0x24, end) and [0x00, 0x18)); the editor rewrites them after the MD5, otherwise
the game reports the save as damaged.

# Editable stats

* Money
* Bounty
* Infractions
* Per car pursuit stats
* Pursuit stats
* Case name

# Issues

* Can't convert the time

# Credits

[This save editor](https://github.com/BilawalAhmed0900/NFSMWSaveE) (which is probably based off of some ancient one I can't find)
