---
layout: page
title: Publications
---
> **From source to target and back: symmetric bi-directional adaptive GAN**  
P. Russo, F.M. Carlucci, T. Tommasi and B. Caputo  
arxiv 2017 [<a href="https://arxiv.org/pdf/1705.08824">PDF</a> - <span class="bibtex">BIBTEX</span>]

<pre class="bibitem">
@article{russo17sbadagan,
  title={From source to target and back: symmetric bi-directional adaptive GAN},
  author={Russo, Paolo and Carlucci, Fabio Maria and Tommasi, Tatiana and Caputo, Barbara},
  journal={arXiv preprint arXiv:1705.08824},
  year={2017}
}
</pre>

> **Bridging between Computer and Robot Vision through Data Augmentation: a Case Study on Object Recognition**  
A. D'Innocente, F.M. Carlucci, M. Colosi and B. Caputo  
ICVS 2017 (**Best Paper Award finalist**) [<a href="https://arxiv.org/pdf/1705.02139">PDF</a> - <a href="https://sites.google.com/view/robocrop/">Project Page</a> - <span class="bibtex">BIBTEX</span>]

<pre class="bibitem">
@inproceedings{d2017bridging,
  title={Bridging between Computer and Robot Vision through Data Augmentation: a Case Study on Object Recognition},
  author={D'Innocente, Antonio and Carlucci, Fabio Maria and Colosi, Mirco and Caputo, Barbara},
  booktitle={The International Conference on Computer Vision Systems, ICVS},
  year={2017}
}
</pre>

> **AutoDIAL: Automatic DomaIn Alignment Layers**  
F.M. Carlucci, L. Porzi, B. Caputo, E. Ricci and S. Rota Bulò  
ICCV 2017 [<a href="https://arxiv.org/pdf/1704.08082">PDF</a> - <span class="bibtex">BIBTEX</span>]

<pre class="bibitem">
@inproceedings{carlucci2017auto,
  title={AutoDIAL: Automatic DomaIn Alignment Layers},
  author={Carlucci, Fabio Maria and Porzi, Lorenzo and Caputo, Barbara and Ricci, Elisa and Bulo, Samuel Rota},
  booktitle={International Conference on Computer Vision (ICCV)},
  year={2017}
}
</pre>

> **DE2CO: Deep Depth Colorization**  
F.M. Carlucci, P. Russo, S.M. Baharlou and B. Caputo  
arXiv 2017 [<a href="https://arxiv.org/pdf/1703.10881">PDF</a> - <span class="bibtex">BIBTEX</span>]

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
ICIAP (oral - **Best Student Paper**) 2017 [<a href="https://arxiv.org/pdf/1702.06332">PDF</a> - <span class="bibtex">BIBTEX</span>]

<pre class="bibitem">
@inproceedings{carlucci2017just,
  title={Just DIAL: DomaIn Alignment Layers for Unsupervised Domain Adaptation},
  author={Carlucci, Fabio Maria and Porzi, Lorenzo and Caputo, Barbara and Ricci, Elisa and Bulo, Samuel Rota},
  booktitle={International Conference on Image Analysis and Processing, ICIAP},
  year={2017}
}
</pre>

> **A deep representation for depth images from synthetic data**  
F.M. Carlucci, P. Russo and B. Caputo  
ICRA 2017 [<a href="https://arxiv.org/pdf/1609.09713">PDF</a> - <a href="https://sites.google.com/site/vandaldepthnet/">Project Page</a> - <span class="bibtex">BIBTEX</span>]

<pre class="bibitem">
@inproceedings{carlucci2016deep,
  title={A deep representation for depth images from synthetic data},
  author={Carlucci, Fabio Maria and Russo, Paolo and Caputo, Barbara},
  booktitle={Proceedings of the IEEE International Conference on Robotics and Automation, ICRA 2017},
  year={2017}
}
</pre>

> **When Naive Bayes Nearest Neighbors Meet Convolutional Neural Networks**  
[I. Kuzborskij](http://idiap.ch/~ikuzbor/), F.M. Carlucci and B. Caputo  
CVPR 2016 [<a href="http://www.cv-foundation.org/openaccess/content_cvpr_2016/papers/Kuzborskij_When_Naive_Bayes_CVPR_2016_paper.pdf">PDF</a> - <a href="https://sites.google.com/site/nbnncnn/">Project Page</a> - <span class="bibtex">BIBTEX</span>]

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
IROS 2015 [<a href="http://www.dis.uniroma1.it/~iocchi/publications/iocchi-iros15.pdf">PDF</a> - <a href="https://sites.google.com/site/socialrobotplanning/">Project Page</a> - <span class="bibtex">BIBTEX</span>]

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
  $('span.bibtex').append('<img class="clipboard" src="{{ site.baseurl }}/public/images/clipboard.png"/>');
  $('span.bibtex img').attr('title', 'Copy bibtex entry'); 
  // adding target attr
  $('a:contains("PDF")').attr('target','_blank');
  $('a:contains("Project Page")').attr('target','_blank');
  // handling bibtex items
  $('span.bibtex').click(function(){
    var bibitem = $(this).parents('blockquote').next('.bibitem');
    bibitem.toggle();
  });

  $('img.clipboard').click(function(){
    var bibitem = $(this).parents('blockquote').next('.bibitem');
    copyToClipboard(bibitem.text());
    var pbloc = $(this).parents('p');
    var copiedText = $('<span> - Copied! </span>').fadeOut(2000, function(){$(this).remove()});
    pbloc.append(copiedText);
  });
});
</script>
