---
layout: page
title: Publications
---

> **DE2CO: Deep Depth Colorization**  
F.M. Carlucci, P. Russo and B. Caputo  
arXiv 2017 [PDF - <span class="bibtex">BIBTEX</span>]

<pre class="bibitem">
@article{carlucci20172,
  title={DE2CO: Deep Depth Colorization},
  author={Carlucci, FM and Russo, P and Baharlou, SM and Caputo, B},
  journal={arXiv preprint arXiv:1703.10881},
  year={2017}
}
</pre>

> **Just DIAL: DomaIn Alignment Layers for Unsupervised Domain Adaptation**  
F.M. Carlucci, L. Porzi, B. Caputo, E. Ricci and S. Rota Bulò  
arxiv 2017 [PDF - <span class="bibtex">BIBTEX</span>]

<pre class="bibitem">
@article{carlucci2017just,
  title={Just DIAL: DomaIn Alignment Layers for Unsupervised Domain Adaptation},
  author={Carlucci, Fabio Maria and Porzi, Lorenzo and Caputo, Barbara and Ricci, Elisa and Bulo, Samuel Rota},
  journal={arXiv preprint arXiv:1702.06332},
  year={2017}
}
</pre>

> **A deep representation for depth images from synthetic data**  
F.M. Carlucci, P. Russo and B. Caputo  
ICRA 2017 [PDF - Project Page - <span class="bibtex">BIBTEX</span>]

<pre class="bibitem">
@inproceedings{carlucci2016deep,
  title={A deep representation for depth images from synthetic data},
  author={Carlucci, Fabio Maria and Russo, Paolo and Caputo, Barbara},
  booktitle={Proceedings of the IEEE International Conference on Robotics and Automation, ICRA 2017},
  year={2017}
}
</pre>

> **When Naive Bayes Nearest Neighbors Meet Convolutional Neural Networks**  
I. Kuzborskij, F.M. Carlucci and B. Caputo  
CVPR 2016 [PDF - Project Page - <span class="bibtex">BIBTEX</span>]

<pre class="bibitem">
@inproceedings{kuzborskij2016naive,
  title={When Naive Bayes Nearest Neighbors Meet Convolutional Neural Networks},
  author={Kuzborskij, Ilja and Maria Carlucci, Fabio and Caputo, Barbara},
  booktitle={Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition},
  pages={2100--2109},
  year={2016}
}
</pre>

> **Explicit representation of social norms for social robots**  
F.M. Carlucci, L. Nardi, L. Iocchi and D. Nardi  
IROS 2015 [PDF - Project Page - <span class="bibtex">BIBTEX</span>]

<pre class="bibitem">
@inproceedings{carlucci2015explicit,
  title={Explicit representation of social norms for social robots},
  author={Carlucci, Fabio Maria and Nardi, Lorenzo and Iocchi, Luca and Nardi, Daniele},
  booktitle={Intelligent Robots and Systems (IROS), 2015 IEEE/RSJ International Conference on},
  pages={4191--4196},
  year={2015},
  organization={IEEE}
}
</pre>
<script>
$(document).ready(function(){
  $('span.bibtex').attr('title', 'Shows bibtex entry');
  $('span.bibtex').append('<img class="clipboard" src="{{ site.baseurl }}public/images/clipboard.png"/>');
  $('span.bibtex img').attr('title', 'Copy bibtex entry'); 
  $('span.bibtex').click(function(){
    var bibitem = $(this).parents('blockquote').next('.bibitem');
    bibitem.toggle();
  });

  $('img.clipboard').click(function(){
    var bibitem = $(this).parents('blockquote').next('.bibitem');
    copyToClipboard(bibitem.text());
    var pbloc = $(this).parents('p');
    var copiedText = $('<span> - Copied! </span>').fadeOut(2000);
    pbloc.append(item);
  });
});
</script>
